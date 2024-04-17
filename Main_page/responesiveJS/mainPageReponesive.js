let toggleMenu = document.querySelector(".header .toggle-menu");
let headerContainer = document.querySelector(".header .container");

toggleMenu.addEventListener("click", () => {
  let faX = document.querySelector(".fa-x");
  document.querySelector(".fa-bars").classList.toggle("active");
  faX.classList.toggle("active");
  headerContainer.classList.toggle("hide");
});
