window.addEventListener("scroll", function () {
  var section = document.getElementById("parks");
  var sectionPosition = section.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (sectionPosition < screenPosition) {
    section.classList.add("fadeIn");
  }
});

window.addEventListener("scroll", function () {
  var section = document.getElementById("outdoor");
  var sectionPosition = section.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (sectionPosition < screenPosition) {
    section.classList.add("fadeIn");
  }
});

// spinner loader

window.addEventListener("load", function () {
  var spinner = document.getElementById("pre-loader");
  spinner.style.display = "none";
});
