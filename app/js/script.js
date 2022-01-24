const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");
  btnHamburger.classList.toggle('open')
});
