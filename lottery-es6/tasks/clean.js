import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//把public下的文件清空
gulp.task('clean',()=>{
	return del(['server/public','server/views'])
})