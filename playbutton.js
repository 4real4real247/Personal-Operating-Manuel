const startstop = document.getElementById("startstop");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const days = document.getElementById("days");

const today = new Date();
const todayAt12 = new Date();
todayAt12.setHours(0, 0, 0, 0);
const birthdate = new Date("01/08/2025");
let totalSeconds = 0;
if (todayAt12.getTime() === birthdate.getTime()) {
  totalSeconds = 0;
} else {
  birthdate.setFullYear(today.getFullYear() + 1);
  totalSeconds = (birthdate - today) / 1000;
}

const setDisplay = (sec) => {
  days.innerText = String(Math.floor(sec / (24 * 60 * 60))).padStart(2, "0");

  sec = sec % (24 * 60 * 60);
  hours.innerText = String(Math.floor(sec / (60 * 60))).padStart(2, "0");
  sec = sec % (60 * 60);
  minutes.innerText = String(Math.floor(sec / 60)).padStart(2, "0");
  sec = sec % 60;
  seconds.innerText = String(Math.floor(sec)).padStart(2, "0");
};

const timer = setInterval(() => {
  if (totalSeconds <= 0) {
    totalSeconds = 0;
    clearInterval(timer);
    return;
  }
  totalSeconds -= 1;
  setDisplay(totalSeconds);
}, 1000);

// this is my audio player

const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause";
  } else {
    audio.pause();
    playButton.textContent = "Play";
  }
});
