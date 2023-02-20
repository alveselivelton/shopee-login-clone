const showPassword = document.querySelector("#show-password");
const eyeBtn = document.querySelector("#eye-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

showPassword.addEventListener("click", () => {
  if (eyeBtn.getAttribute("src") === "img/close-eye.svg") {
    eyeBtn.setAttribute("src", "img/open-eye.svg");
    return;
  }
  eyeBtn.setAttribute("src", "img/close-eye.svg");
});

btn.addEventListener("mouseover", () => {
  if (username.value && password.value) {
    btn.style.opacity = 1;
    btn.style.cursor = "pointer";
  }
});
