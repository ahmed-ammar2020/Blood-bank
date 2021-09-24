"use strict";

let navLinks = document.querySelectorAll(".navbar .nav-item");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    for (let navItem of navLinks) {
      navItem.classList.remove("active");
      navLink.classList.add("active");
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  // back to top btn
  let btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
