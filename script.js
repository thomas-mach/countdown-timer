const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

function timer() {
  const now = new Date();
  const newYear = new Date(2025, 0, 1, 0, 0, 0);

  const nowMiliseconds = now.getTime();
  const newYearMiliseconds = newYear.getTime();
  const restTime = newYearMiliseconds - nowMiliseconds;
  printTime(convertMilliseconds(restTime));
}

function convertMilliseconds(millis) {
  const totalSeconds = millis / 1000;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minuts = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return { days, hours, minuts, seconds };
}

function printTime(restTime) {
  let time = restTime;
  for (let key in time) {
    if (time[key] < 10) {
      time[key] = "0" + time[key];
    }
  }

  days.innerText = time.days;
  hours.innerText = time.hours;
  minuts.innerText = time.minuts;
  seconds.innerText = time.seconds;
}

timer();

setInterval(() => {
  timer();
}, 1000);
