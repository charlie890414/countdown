$(document).ready(function () {
    start();
    function start(){
        $.get('/time',function(result){
            show()
            function show() {
                var starttime = new Date();
                var minus=Date.parse( result )-starttime.getTime();
                var turn=0;
                var second = Math.floor( (minus/1000) % 60  );
                var minute = Math.floor( (minus/1000/60) % 60 );
                var hour = Math.floor( (minus/(1000*60*60)) % 24 );
                var day = Math.floor( minus/(1000*60*60*24) );
                $("p.time").html(day+' day '+hour+' hour '+minute+' minute '+second+' second ');
                return minus;
            }
            function updateClock(){
              var t = show();
              if(t<=0){
                clearInterval(timeinterval);
              }
            }
            updateClock(); // run function once at first to avoid delay
            var timeinterval = setInterval(updateClock,1000);

        })
    }
});
