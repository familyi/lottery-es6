import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

//如果不是在监听状态下，返回回调函数
//在监听状态下，liveserver.new创建服务器。--harmony在当前命令行下执行后面的server/bin/www脚本
//启动服务器
//服务器下的文件改变时，浏览器自动刷新
//notify通知服务器
//监听需要重启服务器的文件
gulp.task('server',(cb)=>{
	if(!args.watch) return cb();

	var server = liveserver.new(['--harmony','server/bin/www'])

	server.start();

	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);
	})

	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()
	});
})