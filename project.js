var morining = 12;
var afternoon = 12;
var Evening = 18;
var Night = 21;

var showtime= function() {
    var clock = document.getElementById('clock');


var currentTime= new Date();
var hours = currentTime.getHours();
var mins = currentTime.getMinutes();
var secs = currentTime.getSeconds();
var med = "AM";

if (hours >= afternoon){
    med = "PM";
}
if (hours > afternoon){
    hours= hours - 12;
    
}
if(hours <= 10){
    hours = "0" + hours;
     
}
if (mins < 10){
    mins = "0" + mins;

}
if (secs < 10){
    secs = "0" + secs;
}
var displayTime = hours + ":"+ mins + ":"+ secs + " "+ med;
 clock.innerText = displayTime;

};
 var change =function(){
     var timeChange = new Date().getHours();
     var message;
     var timeEvent = document.getElementById('event');
      if(timeChange == morining){
      message= "Wake up it time to make this money";
      }
      else if(timeChange < morining){
          message =  "Good morining";
      }
      else if (timeChange== afternoon){
         message="It lunch time";
      }
      else if( timeChange >= afternoon){
          message ="Good afternoon";
      }
      else if(timeChange >= Evening){
          message="Good evening";
      }
      else if(timeChange== Evening){
          message = "Time to go home";
      }
      else if(timeChange== Night){
          message= "Time for bed";
        }
        else {
            message="Sleep tight";
        }
        console.log(message);
        timeEvent.innerText =message;
        showtime();
    };
 change();
 var oneSecond = 1000;
 setInterval(change, oneSecond);
 var button = document.getElementById('button');


var alarm =document.getElementById('alarm');
var alarmClock = function(){
    morining = alarm.value;
};
alarm.addEventListener('change', alarmClock);
var lunchTime = document.getElemntId('lunch');
var lunchBreak = function(){
    afternoon = lunchTime.value;
};
lunchTime.addEventListener('change', lunchBreak);

var bedTime = document.getElementById('Bed');
var sleeping = function (){
    Night = bedTime.value;
}
bedTime.addEventListener('change', sleeping);