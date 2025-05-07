const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});
