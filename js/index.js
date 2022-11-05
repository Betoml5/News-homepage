const button = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const btnCloseMenu = document.querySelector("#btnMenuClose");

btnCloseMenu.addEventListener("click", () => {
  menu.classList.remove("showMenu");
});

button.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
});
