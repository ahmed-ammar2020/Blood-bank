$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
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
});
