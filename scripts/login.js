const users = {
  jacob: {
    password: "pass123",
    image: "../images/jacob.jpg",
    score: "12045",
  },
  emily: {
    password: "stretchme",
    image: "../images/emily.jpg",
    score: "11520",
  },
  michael: {
    password: "fitness2024",
    image: "../images/michael.jpg",
    score: "9820",
  },
  christopher: {
    password: "corepower",
    image: "../images/christopher.jpg",
    score: "9455",
  },
  ashley: {
    password: "moveit",
    image: "../images/ashley.jpg",
    score: "8790",
  },
  samantha: {
    password: "letsgrow",
    image: "../images/samantha.jpg",
    score: "7720",
  },
  brian: {
    password: "trainstrong",
    image: "../images/brian.jpg",
    score: "6900",
  },
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = document
    .getElementById("username")
    .value.toLowerCase()
    .trim();
  const passwordInput = document.querySelector('input[type="password"]').value;
  const user = users[usernameInput];
  if (user && user.password === passwordInput) {
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("userImage", user.image);
    window.location.href = "/may-code-jam/pages/homepage.html";
  } else {
    document.getElementById("error-message").textContent =
      "Invalid username or password.";
  }
});
