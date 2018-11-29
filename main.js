
// document.addEventListener('DOMContentLoaded', function () {});

// function stopWatch() {

//   let time = 0; //time starts off at (0)
//   let interval; //breaks time down into seconds, minutes, and hours
//   let offset; //used with Date.now 

//   function update() { //will update every ms (10)
//     time += timePassed //update exact amount of timepassed to time
//   }

//   function timePassedCalc() { //calculate time passed
//     let now = Date.now(); //store time now 
//     let timePassed = now - offset; //calculate the time now minus the time passed  
//     offset = now; //assigns new time passed to current offset
//     return timePassed; //return time passed
//   }

//   this.stopWatchRunning = false; //stopwatch is not running 

//   this.start = function () { //start function
//     if (!this.stopWatchRunning) { //if stopwatch is not running then proceed
//       interval = setInterval(update, 10); //call update, time in ms (10)
//       offset = Date.now(); //start logging time passed
//       this.stopWatchRunning = true; //keep stopwatch running 
//     }
//   };

//   this.stop = function () { //stop function
//     if (this.stopWatchRunning) { // if stopwatch is running then proceed
//       clearInterval(interval) // clear the interval function
//       interval = null; //interval has no value 
//       this.stopWatchRunning = false; //stop stopwatch running 
//     }
//   };

//   this.reset = function () { //reset function
//     time = 0; //reset time to (0)
//   };

// }

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let time = 0;
setInterval(setTime, 10);

function setTime() {
  ++time;
  minutes.innerHTML = Math.floor((time / 10 / 60) % 60);
  seconds.innerHTML = Math.floor((time / 10) % 60);
  milliseconds.innerHTML = pad(time % 60);
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
