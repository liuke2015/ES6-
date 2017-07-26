/**
 * Created by Administrator on 2017/7/26 0026.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args.js';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    var server=liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/publish/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);
    });

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
       server.start.bind(server)();//接口更新，服务器重启
    })
})