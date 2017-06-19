import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

//创建脚本编译任务,任务名称自定义为"script"
//gulp.src:打开app/js/index.js
//用plumber处理常规错误逻辑，默认在过程中处理错误，改为在最后集中处理错误
//named：对文件重命名
//对js编译，webpack功能,遇到js，用babel的loaders,对错误的一些处理
//dest,把文件写入指定路径。宝箱sever原因：server要拿到编译好的js才能在整个服务中运行起来
//rename,编译压缩，重命名压缩后的文件，重新复制一份文件的基础上压缩uglify
//dest,压缩后的文件重新存储到某个地方
//监听，文件变化后自动刷新
//总流程：编译-->存储-->压缩-->存储-->监听
gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])
	 .pipe(plumber({
	 	errorHandle:function(){

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
	 	log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
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
	 //如果命令行中有watch选项，执行livereload
})