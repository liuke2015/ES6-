/**
 * Created by dell on 2017/8/6.
 */
    /*
    * */
class Timer{
    countdown(end,update,handle){
        const now=new Date().getTime();
        const self=this;
        if(now-end){
            handle.call(self);
        }else{
            let last_time=end-now;
            const px_d=1000*60*60*24;
            const px_h=1000*60*60;
            const px_m=1000*60;
            const px_s=1000;

            let d=Math.floor(last_time/px_d);
            let h=Math.floor((last_time-d*px_d)/px_h);
            let m=Math.floor((last_time-d*px_d-h*px_h)/px_m);
            let s=Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);

            let r=[];

            if(d>0){
                r.push(`<em>${d}天</em>`);
            }
            if(r.length||h>0){
                r.push(`<em>${h}时</em>`);
            }
            if(r.length||m>0){
                r.push(`<em>${m}分</em>`);
            }
            if(r.length||s>0){
                r.push(`<em>${s}秒</em>`);
            }

            let time_str=r.join('');
            self.last_time=time_str;
            update.call(self,time_str);
            setTimeout(function(){
                self.countdown(end,update,handle);
            },1000)

        }
    }
}
