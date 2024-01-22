const newYears = "1 Jan 2025";
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const timeInSecs = Math.floor((newYearsDate - currentDate) / 1000);

  const days = Math.floor(timeInSecs / 86400);
  const hours = Math.floor((timeInSecs % 86400) / 3600);
  const minutes = Math.floor((timeInSecs % 3600) / 60);
  const seconds = timeInSecs % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}
countDown();

setInterval(countDown, 1000);
