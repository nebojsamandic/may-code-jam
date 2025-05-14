    const leaderboard = document.getElementById('leaderboard');
    const toggle = document.getElementById('toggle-leaderboard');
    toggle.addEventListener('click', () => {
      leaderboard.classList.toggle('hidden');
    });