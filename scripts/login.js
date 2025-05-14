  const users = {
    jacob: "pass123",
    emily: "stretchme",
    michael: "fitness2024",
    christopher: "corepower",
    ashley: "moveit",
    samantha: "letsgrow",
    brian: "trainstrong"
  };

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value.toLowerCase().trim();
    const passwordInput = document.querySelector('input[type="password"]').value;

    if (users[usernameInput] && users[usernameInput] === passwordInput) {
      window.location.href = "../index.html";
    } else {
      document.getElementById("error-message").textContent = "Invalid username or password.";
    }
  });