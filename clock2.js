var secondhand = document.getElementById("second");
var minutehand = document.getElementById("minute");
var hourhand = document.getElementById("hour");
var secrhythm = 1000; // in milliseconds
var minrhythm = secrhythm * 60;
var hrrhythm = minrhythm * 60;
var hour = 0;
var minute = 0;
var second = 0;

setInterval(secondtick, secrhythm);
// setInterval(minutetick, minrhythm);
// setInterval(hourtick, hrrhythm);

var displaytext = document.getElementById("display");

/* POSITION FUNCTIONS */
function secondpos(sec) {
  // seconds move 360/60 = 6 degrees at a time
  var pos = 360/60 * sec;
  secondhand.style.transform = "rotate(" + pos + "deg)";
}

function minutepos(min) {
  // minutes move 360/60 = 6 degrees at a time
  var pos = 360/60 * min;
  minutehand.style.transform = "rotate(" + pos + "deg)";
}

function hourpos(hr) {
  // hours move 360/12 = 30 degrees at a time
  var pos = 360/12 * hr;
  hourhand.style.transform = "rotate(" + pos + "deg)";
}

/* MOVEMENT FUNCTIONS */
function secondtick() {
  var now = Date().slice(16, 24);
  displaytext.value = now;
  var timestring = now.split(":");
  secondpos(timestring[2]);
  minutepos(timestring[1]);
  hourpos(timestring[0]);
}

function minutetick() {
  minute++;
  minutepos(minute);
  displaymin(minute);
}

function hourtick() {
  hour++;
  hourpos(hour);
  displayhr(hour);
}

/* TIME FORMATTING FUNCTIONS */
function displaysec(sec) {
  return sec%60;
}

function displaymin(min) {
  return min%60;
}

function displayhr(hr) {
  return hr%12;
}

function displaytime(hr, min, sec) {
  var pad = "00";
  var nhr = pad.substring(0, pad.length - hr.toString().length) + hr;
  var nmin = pad.substring(0, pad.length - min.toString().length) + min;
  var nsec = pad.substring(0, pad.length - sec.toString().length) + sec;

  return nhr + ":" + nmin + ":" + nsec;
}

function parsetime(timestr) {
  // returns array [hr, min, sec]
  return timestr.split(":");
}
