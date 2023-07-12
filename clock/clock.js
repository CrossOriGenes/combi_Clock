/*get the clock hands*/
const hr = document.getElementById('hrHand'); //hour hand
const min = document.getElementById('minHand'); //minute hand
const sec = document.getElementById('secHand'); //second hand
/* digital display */
const h = document.getElementById('hour'); //hour
const m = document.getElementById('min'); //minute
const s = document.getElementById('sec'); //second
const ap = document.getElementById('ampm'); //am-pm

setInterval( ()=> {
    
    const day = new Date(); //get the instance of current date
    const hh = day.getHours(); //get current hour
    const mn = day.getMinutes(); //get current minutes
    const ss = day.getSeconds(); //get current seconds

    var hrRotate = 30*hh + mn/2; 
    var minRotate = 6*mn;
    var secRotate = 6*ss;

    //move to the required degrees
    hr.style.transform = `rotate(${hrRotate}deg)`;
    min.style.transform = `rotate(${minRotate}deg)`;
    sec.style.transform = `rotate(${secRotate}deg)`;



    /* set the digital clock */
    var date = new Date(); //get the instance of current date
    var hrs = date.getHours(); //get current hour
    var mins = date.getMinutes(); //get current minutes
    var secs = date.getSeconds(); //get current seconds

    let ampm = (hrs >= 12) ? "PM" : "AM" //set the am/pm
  
    //set 24hrs to 12hrs clock format 
    if(hrs > 12){
        hrs = hrs - 12; 
    }

    //set one digit number to two digits format
    hrs = (hrs >= 10) ? hrs : "0"+ hrs
    mins = (mins >= 10) ? mins : "0"+ mins
    secs = (secs >= 10) ? secs : "0"+ secs

    //set all the values
    h.innerText = hrs;
    m.innerText = mins;
    s.innerText = secs;
    ap.innerText = ampm;

});



