const hamburger = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('#main-menu');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  mainMenu.classList.remove("active");
}))
