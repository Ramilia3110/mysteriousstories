let button = document.querySelector(".header__switch-button");
let header = document.querySelector(".header");

button.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  header.classList.toggle("header--light-mode");
});
