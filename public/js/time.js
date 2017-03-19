$(document).ready(function () {
    start();
    function start(){
        $.get('/time',function(result){
            var starttime = new Date();
            var str = result[1]+' '+result[2]+' ,'+result[0];
            var time = Date.parse( str );
            var minus=time-starttime.getTime();
            var turn=0;
            setTimeout(show, 0);
            function show() {
                var space = Math.floor(minus/1000);
                var day = Math.floor(space/86400);
                space-=day*86400;
                var hour = Math.floor(space/3600);
                space-=hour*3600;
                var minute = Math.floor(space/60);
                space-=minute*60;
                var second = Math.floor(space);
                $("p.time").html(day+' day '+hour+' hour '+minute+' minute '+second+' second ');
                setTimeout(countDownStart, 0);
            }
            function countDownStart(){
                turn+=1;
                var offset = new Date().getTime() - (starttime.getTime() + turn*1000);
                var nextTime = 1000 - offset;
                if (nextTime < 0) { nextTime = 0 };
                minus -= 1000;
                console.log("誤差：" + offset + "ms，下一次執行：" + nextTime + "ms後，離開始還有：" + minus + "ms");
                setTimeout(show,nextTime);
            }
        })
    }
});
