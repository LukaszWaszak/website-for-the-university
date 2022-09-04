const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side-bar");


openMenu.addEventListener("click", () => {
    sideBar.classList.toggle("active");
})

closeMenu.addEventListener("click", () => {
    sideBar.classList.remove("active");
})