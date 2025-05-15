    const leaderboard = document.getElementById('leaderboard');
    const toggle = document.getElementById('toggle-leaderboard');
    toggle.addEventListener('click', () => {
      leaderboard.classList.toggle('hidden');
    });

    window.addEventListener("DOMContentLoaded", () => {
  const avatarDiv = document.getElementById("user-avatar");
  const userImage = localStorage.getItem("userImage");
  if (userImage && avatarDiv) {
    avatarDiv.innerHTML = `<img src="${userImage}" alt="User Avatar" />`;
  }
});
