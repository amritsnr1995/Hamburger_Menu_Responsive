// creating reference to class.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const navLink = document.querySelectorAll(".nav_link");
// add active class

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};
hamburger.addEventListener("click", toggleMenu);

// remove active class

const removeActive = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

navLink.forEach((link) => {
  link.addEventListener("click", removeActive);
});
