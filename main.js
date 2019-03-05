
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
