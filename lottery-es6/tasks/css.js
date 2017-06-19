import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//src,打开app下所有.css文件
//dest,把这些文件拷贝到一个地方
//监听是否热更新

gulp.task('css',()=>{
	return gulp.src('app/**/*.css')
	.pipe(gulp.dest('server/public'))
	.pipe(gulpif(args.watch,livereload()))
})