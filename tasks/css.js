/**
 * Created by Administrator on 2017/7/26 0026.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
})