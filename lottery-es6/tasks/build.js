import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//规定执行顺序
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));