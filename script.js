const menuBar = document.querySelector(".menu-bar");
const navContent = document.querySelector(".nav-content");

menuBar.addEventListener("click", function () {
  navContent.classList.toggle("active");
});
