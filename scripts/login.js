const users = {
  jacob: {
    password: "pass123",
    image: "./images/jacob.jpg"
  },
  emily: {
    password: "stretchme",
    image: "./images/emily.jpg"
  },
  michael: {
    password: "fitness2024",
    image: "./images/michael.jpg"
  },
  christopher: {
    password: "corepower",
    image: "./images/christopher.jpg"
  },
  ashley: {
    password: "moveit",
    image: "./images/ashley.jpg"
  },
  samantha: {
    password: "letsgrow",
    image: "./images/samantha.jpg"
  },
  brian: {
    password: "trainstrong",
    image: "../images/brian.jpg"
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
  window.location.href = "../index.html";
} else {
    document.getElementById("error-message").textContent = "Invalid username or password.";
  }
});
