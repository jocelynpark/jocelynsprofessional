// $("#toggle-button").click(function () {
//   if ($("#toggle-element").hasClass("active")) {
//     $("#toggle-element").removeClass("active");
//   } else {
//     $("#toggle-element").addClass("active");
//   }
// });


// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburgerMenu.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
// });

// function alignHamburgerMenu() {
//   if (window.innerWidth < 768) {
//     hamburgerMenu.style.display = "block";
//     hamburgerMenu.style.marginLeft = "auto";
//   } else {
//     hamburgerMenu.style.display = "none";
//     navLinks.classList.remove("open");
//   }
// }

// alignHamburgerMenu();
// window.addEventListener("resize", alignHamburgerMenu);

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
