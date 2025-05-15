const users = {
  jacob: {
    password: "pass123",
    image: "../images/jacob.jpg",
    score: "20"
  },
  emily: {
    password: "stretchme",
    image: "../images/emily.jpg",
    score: "45"
  },
  michael: {
    password: "fitness2024",
    image: "../images/michael.jpg",
    score: "13"
  },
  christopher: {
    password: "corepower",
    image: "../images/christopher.jpg",
    score: "25"
  },
  ashley: {
    password: "moveit",
    image: "../images/ashley.jpg",
    score: "16"
  },
  samantha: {
    password: "letsgrow",
    image: "../images/samantha.jpg",
    score: "11"
  },
  brian: {
    password: "trainstrong",
    image: "../images/brian.jpg",
    score: "3"
  }
};


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value.toLowerCase().trim();
  const passwordInput = document.querySelector('input[type="password"]').value;
  const user = users[usernameInput];
if (user && user.password === passwordInput) {
  localStorage.setItem("username", usernameInput);
  localStorage.setItem("userImage", user.image); 
  window.location.href = "../pages/homepage.html";
} else {
    document.getElementById("error-message").textContent = "Invalid username or password.";
  }
});
