//处理命令行参数，程序里要识别我们输入的命令行
import yargs from 'yargs';
//定义基本参数
//区分开发、线上环境
const args = yargs
//命令的选项部分
.option('production',{
	boolean : true,
	default : false, //默认开发环境
	description : 'min all scripts'
})

//是否监听开发环境中修改的文件，是否要自动编译
.option('watch',{
	boolean : true,
	default : false,
	description:"watch all files"
})

//是否输出命令行执行的日志
.option('verbose',{
	boolean : true,
	default : false,
	description:"log"
})

//映射，js在压缩后会有个sourcemaps，处理这个参数
//强制生成sourcemaps
.option('sourcemaps',{
	description:'force the creation of sourcemaps'
})

//设置服务器端口
.option('port',{
	string:true,
	default:8080, 
	description :'server port'
})

//输入的命令行以字条串作为解释
.argv

export default args;