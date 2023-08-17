const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".navbar-menu");

menuBtn.addEventListener("click", () => {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
  navMenu.classList.add("slide-down");
});
