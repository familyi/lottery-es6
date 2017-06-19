import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';
import args from './util/args';

//如果不是在监听状态下，返回回调函数
//app/js变化时，调用tasks/scripts.js构建脚本，把es6--->es5,并写到server/public中
gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
})