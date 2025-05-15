window.addEventListener("DOMContentLoaded", () => {
  const users = {
    jacob: { password: "pass123", image: "../images/jacob.jpg", score: "12045" },
    emily: { password: "stretchme", image: "../images/emily.jpg", score: "11520" },
    michael: { password: "fitness2024", image: "../images/michael.jpg", score: "9820" },
    christopher: { password: "corepower", image: "../images/christopher.jpg", score: "9455" },
    ashley: { password: "moveit", image: "../images/ashley.jpg", score: "8790" },
    samantha: { password: "letsgrow", image: "../images/samantha.jpg", score: "7720" },
    brian: { password: "trainstrong", image: "../images/brian.jpg", score: "6900" }
  };

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
  if (dropdownUsername) dropdownUsername.textContent = username.charAt(0).toUpperCase() + username.slice(1);

  if (leaderboardList) {
    const sortedUsers = Object.entries(users).sort(([, a], [, b]) => b.score - a.score);
    leaderboardList.innerHTML = "";
    sortedUsers.forEach(([name, data]) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${name.charAt(0).toUpperCase() + name.slice(1)}</span><span>${data.score}</span>`;
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
