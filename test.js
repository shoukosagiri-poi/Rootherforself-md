/// get date time from time zone asia jakarta and show hours and minutes mode 24 hours

var d = new Date();
var n = d.toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
var date = new Date(n);
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
seconds = seconds < 10 ? '0'+seconds : seconds;
var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
console.log(strTime);