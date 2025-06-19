const launchDate = new Date("2025-07-01T00:00:00").getTime();
const timerEl = document.getElementById("timer");

function pad(n) {
  return n < 10 ? "0" + n : n;
}

function updateCountdown() {
  const now = new Date().getTime();
  const gap = launchDate - now;

  if (gap <= 0) {
    timerEl.innerText = "00일 00시간 00분 00초";
    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  timerEl.innerText = `${pad(days)}일 ${pad(hours)}시간 ${pad(minutes)}분 ${pad(seconds)}초`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
