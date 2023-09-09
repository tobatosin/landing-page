//  CURRENT DAY OF THE WEEK   
var today = new Date();
var day =today.getDay();
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday'];
 

document.getElementById("dow").innerHTML= daylist[day];
    
// CURRENT UTC TIME 
var currentDate = new Date();
var milliseconds = currentDate.getTime();


document.getElementById('currentUTCTime').innerHTML=milliseconds;
