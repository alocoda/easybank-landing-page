const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector('body')
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeEls = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close hamburger menu
    body.classList.remove('noscroll');
    header.classList.remove("open");
    fadeEls.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open hamburger menu
    body.classList.add('noscroll');
    header.classList.add("open");
    fadeEls.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
