document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(".fade-in, .fade-up");

  function checkScroll() {
    let windowHeight = window.innerHeight;
    elements.forEach((el) => {
      let position = el.getBoundingClientRect().top;
      if (position < windowHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on load
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".subscribe-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
    });
});
let lastScrollTop = 0;
const navbar = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add("hidden");
    navbar.classList.remove("visible");
  } else {
    navbar.classList.remove("hidden");
    navbar.classList.add("visible");
  }

  lastScrollTop = currentScroll;
});
