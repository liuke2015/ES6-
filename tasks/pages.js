/**
 * Created by Administrator on 2017/7/26 0026.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.desc('server'))
        .pipe(gulpif(args.watch,livereload()))
})
