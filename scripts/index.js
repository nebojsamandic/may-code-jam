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


//will need to change Id 
const stretchNowButton = document.getElementById('stretch-now');
function getStretch() => {
 const stretchIndex = Math.floor(Math.random() * stretches.length) //may need to change array name
 const selectedStretch = stretches[stretchIndex]; // may need to change array name
 // stretchName.textContent = selectedStretch.name;
 //stretchImage.src = selectedStretch.image;
 //stretchImage.alt = selectedStretch.name;
}
stretchNowButton.addEventListener("click", getStretch);