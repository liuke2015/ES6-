import gulp from 'gulp';
import gulpif from 'gulp-if';/*做if判断的*/
import concat from 'gulp-concat';/*处理文件拼接*/
import webpack from 'webpack';/*工具包-打包*/
import gulpWebpack from 'webpack-stream';/**/
import named from 'vinyl-named';/*文件重命名做标志*/
import livereload from 'gulp-livereload';/*文件更改后，浏览器自动更新*/
import plumber from 'gulp-plumber';/*处理文件信息流*/
import rename from 'gulp-rename';/*文件重命名*/
import uglify from 'gulp-uglify';/*压缩js、css*/
import {log,colors} from 'gulp-util';/*命令行输出*/
import args from './util/args';/*命令行参数进行解析*/

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler:function(){

            }
        }))
    .pipe(named())
    .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            log("Finished '${colors.cyan('scripts')}'", stats.toString({
                chunks:false
            }))
        })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
