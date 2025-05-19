const stretchCatalog = [
  {
    name: "Calf",
    description:
      "To start, stand at arm's length from a wall. Put your right foot behind your left and slowly lean toward the wall while bending your left knee. Keeping your back straight, you should feel your right calf stretch. Hold for about 30 seconds then swap legs. *Image from Mayo clinic*",
    image: "../images/stretch-calf.jpeg",
  },
  {
    name: "Ankle Rotations",
    description:
      "To start, extend your leg out in front of you with your ankle in a neutral position. Slowly rotate your ankle in a full circle. Repeat 10 circles clockwise and counter-clockwise, then repeat this for your other ankle. *Image from Versus Arthritis*",
    image: "../images/stretch-ankle.jpg",
  },
  {
    name: "Hamstring",
    description:
      "To start, stand with your feet together. With a slight bend in your knees, slowly bend at your hips and reach for the ground. Take a few deep breathes to settle into this position, holding for 30 secs each time. *Image from Runners World*",
    image: "../images/stretch-hamstring.jpeg",
  },
  {
    name: "Quadriceps",
    description:
      "To start, stand near a wall and balance your stance on one leg. Using your free hand, grab your ankle and pull it behind you. Hold this stretch for 30 seconds and repeat for the other leg. *Image from alomoves*",
    image: "../images/stretch-quad.jpg",
  },
  {
    name: "Hip Flexors",
    description:
      "To start, kneel on one knee perhaps on a towel for comfort. With a straight back, slowly shift your weight toward your leading knee. You will feel a stretch in your hip, hold that for 30 seconds and then repeat on the other side. *Image from Essentrics*",
    image: "../images/stretch-hip-flexors.jpg",
  },
  {
    name: "Lower Back",
    description:
      "To start, lie on your back and pull one knee towards your chest. Hold for 30 seconds and repeat for the other knee. *Image from Mayo clinic*",
    image: "../images/stretch-lower-back.jpg",
  },
  {
    name: "Lats",
    description:
      "To start, stand with your feet at shoulder width. Raise both of your hands over your head and clasps your hands. Bending at your hip, slowly move your torso to one side. Hold for 30 seconds and repeat for the other side. *Image from Learn Muscles*",
    image: "../images/stretch-lats.jpg",
  },
  {
    name: "Shoulders",
    description:
      "To start, grab a band or a broom. Grabbing the broom past shoulder width with both hands in front of you, slowly raise it above your head and pass through your shoulder joint. You should end up with the broom behind your back. Next, slowly follow the same path back through your shoulder joint to your starting position. Repeat 5-10 times. *Image from Shuttershock*",
    image: "../images/stretch-shoulder.jpg",
  },
  {
    name: "Upper Back",
    description:
      "To start, stand with your back against a wall. Create a 'field goal' with your arms. So that your elbows are touching the wall and your hands are straight up. Start with your elbows as high up on the wall you can and slowly lower them down the wall. Then raise them back above your head. Repeat 10 times. *Image from Men's Health*",
    image: "../images/stretch-upper-back.jpg",
  },
  {
    name: "Neck",
    description:
      "To start, straighten your back and center your head. Slowly rotate your head to the left until you can't go any further and hold for 5 seconds. Then repeat for the right side. Next, with the original starting position, tilt your head to the left until you feel the tension in your neck, not too far, and hold for 5 seconds and repeat for the other side. *Image from exer-pedia*",
    image: "../images/stretch-neck.jpg",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const users = {
    jacob: { password: "pass123", image: "../images/jacob.jpg", score: "10" },
    emily: { password: "stretchme", image: "../images/emily.jpg", score: "20" },
    michael: {
      password: "fitness2024",
      image: "../images/michael.jpg",
      score: "30",
    },
    christopher: {
      password: "corepower",
      image: "../images/christopher.jpg",
      score: "10",
    },
    ashley: { password: "moveit", image: "../images/ashley.jpg", score: "20" },
    samantha: {
      password: "letsgrow",
      image: "../images/samantha.jpg",
      score: "15",
    },
    brian: {
      password: "trainstrong",
      image: "../images/brian.jpg",
      score: "30",
    },
  };

  let selectedFeedback = null;
  let streakCount = parseInt(localStorage.getItem("streakCount")) || 0;

  const stretchModal = document.querySelector(".modal");
  const stretchModalCloseBtn = stretchModal.querySelector(".modal__close-btn");
  const stretchNowButton = document.getElementById("stretch-now");

  const likeBtn = document.querySelector(".modal__like-btn");
  const dislikeBtn = document.querySelector(".modal__dislike-btn");
  const saveButton = document.querySelector(".modal__submit-btn");

  const streakDisplay = document.getElementById("streak-count");
  if (streakDisplay) streakDisplay.textContent = streakCount;

  likeBtn.addEventListener("click", () => {
    selectedFeedback = "like";
    likeBtn.classList.add("selected");
    dislikeBtn.classList.remove("selected");
  });

  dislikeBtn.addEventListener("click", () => {
    selectedFeedback = "dislike";
    dislikeBtn.classList.add("selected");
    likeBtn.classList.remove("selected");
  });

  function openModal(modal) {
    modal.classList.add("modal_is-opened");
  }

  function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
  }

  function getStretch() {
    const stretchIndex = Math.floor(Math.random() * stretchCatalog.length);
    const selectedStretch = stretchCatalog[stretchIndex];
    document.getElementById("stretch-name").textContent = selectedStretch.name;
    const stretchImage = document.getElementById("stretch-image");
    stretchImage.src = selectedStretch.image;
    stretchImage.alt = selectedStretch.name;
    document.getElementById("stretch-descript").textContent =
      selectedStretch.description;
  }

  if (stretchModal && stretchModalCloseBtn) {
    stretchModalCloseBtn.addEventListener("click", () =>
      closeModal(stretchModal)
    );
  }

  if (stretchNowButton) {
    stretchNowButton.addEventListener("click", () => {
      getStretch();
      openModal(stretchModal);
      timerDisplay.classList.add("hidden");
    });
  }

  if (saveButton) {
    saveButton.addEventListener("click", (e) => {
      e.preventDefault();
      timerDisplay.classList.add("hidden");

      if (!selectedFeedback) {
        alert("Please select 👍 or 👎 before saving.");
        return;
      }

      const stretchName = document.getElementById("stretch-name").textContent;
      const stretchImageSrc = document.getElementById("stretch-image").src;
      const comment = document.querySelector(".modal__comment-box").value;
      const feedbackIcon = selectedFeedback === "like" ? "✔️" : "❌";

      const notesGrid = document.getElementById("notes-grid");
      const noteCard = document.createElement("div");
      noteCard.classList.add("note-card");
      noteCard.innerHTML = `
        <img src="${stretchImageSrc}" alt="${stretchName}">
        <h4>${stretchName} ${feedbackIcon}</h4>
        <p>${comment || "No note left."}</p>
      `;
      notesGrid.appendChild(noteCard);

      document.querySelector(".modal__comment-box").value = "";
      likeBtn.classList.remove("selected");
      dislikeBtn.classList.remove("selected");
      selectedFeedback = null;

      streakCount++;
      if (streakDisplay) streakDisplay.textContent = streakCount;
      localStorage.setItem("streakCount", streakCount);

      const username = localStorage.getItem("username");
      if (username && users[username]) {
        users[username].score = String(Number(users[username].score) + 1);

        const leaderboardList = document.getElementById("dropdown-leaderboard");
        if (leaderboardList) {
          const sortedUsers = Object.entries(users).sort(
            ([, a], [, b]) => b.score - a.score
          );
          leaderboardList.innerHTML = "";
          sortedUsers.forEach(([name, data]) => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${
              name.charAt(0).toUpperCase() + name.slice(1)
            }</span><span>${data.score}</span>`;
            if (name === username) li.classList.add("current-user");
            leaderboardList.appendChild(li);
          });
        }
      }

      closeModal(stretchModal);
    });
  }

  const username = localStorage.getItem("username");
  const userImage = localStorage.getItem("userImage");

  const avatarDiv = document.getElementById("user-avatar");
  const avatarImg = document.getElementById("avatar-img");
  const dropdown = document.getElementById("avatar-dropdown");
  const dropdownAvatar = document.getElementById("dropdown-avatar");
  const dropdownUsername = document.getElementById("dropdown-username");
  const leaderboardList = document.getElementById("dropdown-leaderboard");

  if (!username || !userImage) return;

  if (avatarImg) avatarImg.src = userImage;
  if (dropdownAvatar) dropdownAvatar.src = userImage;
  if (dropdownUsername) {
    dropdownUsername.textContent =
      username.charAt(0).toUpperCase() + username.slice(1);
  }

  if (leaderboardList) {
    const sortedUsers = Object.entries(users).sort(
      ([, a], [, b]) => b.score - a.score
    );
    leaderboardList.innerHTML = "";
    sortedUsers.forEach(([name, data]) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${
        name.charAt(0).toUpperCase() + name.slice(1)
      }</span><span>${data.score}</span>`;
      if (name === username) li.classList.add("current-user");
      leaderboardList.appendChild(li);
    });
  }

  if (avatarDiv && dropdown) {
    avatarDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
    });

    dropdown.addEventListener("click", (e) => e.stopPropagation());
  }
});

const timerButtons = document.querySelectorAll(".timer-buttons button");
const timerDisplay = document.getElementById("stretch-timer");
const countdownDisplay = document.getElementById("countdown-display");
const alertBox = document.getElementById("timer-alert");

let countdownInterval = null;

const alarmSound = new Audio("../sounds/alarm.mp3");

timerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const seconds = parseInt(btn.textContent);
    if (countdownInterval) clearInterval(countdownInterval);

    timerDisplay.classList.remove("hidden");
    countdownDisplay.textContent = seconds; // would need to change to minutes for release

    let timeLeft = seconds;
    countdownInterval = setInterval(() => {
      timeLeft--;
      countdownDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        timerDisplay.classList.add("hidden");
        showFinalAlert();
      }
    }, 1000);
  });
});

function showFinalAlert() {
  alarmSound.play();

  alertBox.classList.remove("hidden");

  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, 2000);
}
