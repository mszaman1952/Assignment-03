

function digitalClock(){

    // dom selection area =========================

    var dClock = document.querySelector('#dClock');

   setInterval(() => {

    // date diclear area ==========================

     var date = new Date();
     var hour = date.getHours();
     var minute = date.getMinutes();
     var second = date.getSeconds();


    //  condition area =============================
       if (hour >= 12) {
         var amPm = "PM";
       } else {
         amPm = "AM";
       }
      if (hour < 10) {
      hour = "0" + hour;
    }
    // hour = hour >= 12 ? hour - 12 : hour;
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }

    // var amPm = hour >= 12 ? "AM" : "PM";

    //  innerHTML area ============================

 dClock.innerHTML = `${hour} : ${minute} : ${second} : ${amPm}`


   }, 1000);

}

digitalClock()







