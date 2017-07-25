import yargs from 'yargs';//引入命令行包

const args=yargs
//命令行参数
.option('production',{
	boolean:true,
	default:false,
	describe:'min all scripts'
})

.option('watch',{
	boolean:true,
	default:false,
	describe:'watch all files'
})

.option('verbose',{
	boolean:true,
	default:false,
	describe:'log'
})

.option('sourcemaps',{
	describe:'force the creation of sroucemaps'
})

.option('port',{
	string:true,
	default:8080,
	describe:'server port'
})

.argv
