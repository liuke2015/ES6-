/**
 * Created by Administrator on 2017/7/26 0026.
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));