const streakDisplay = document.getElementById("streak-count");
const streakKey = "streakCount";
const dateKey = "lastMarkedDate";

let currentStreak = parseInt(localStorage.getItem(streakKey)) || 0;
let lastMarkedDate = localStorage.getItem(dateKey);

const today = new Date();
const todayString = today.toDateString(); // only using by day
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
const yesterdayString = yesterday.toDateString();

function initializeStreak() {
  if (lastMarkedDate === todayString) {
    return currentStreak;
  } else if (lastMarkedDate === yesterdayString) {
    currentStreak += 1;
  } else {
    currentStreak = 1;
  }
  localStorage.setItem(streakKey, currentStreak);
  localStorage.setItem(dateKey, lastMarkedDate);

  return currentStreak;
}

const updatedStreak = initializeStreak();
streakDisplay.textContent = updatedStreak;
