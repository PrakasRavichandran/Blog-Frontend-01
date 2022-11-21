$(function () {
  // Preloader Active
  $(window).on("load", function () {
    $(".preloader-wrapper").fadeOut();
  });

  // Feature Slider Active
  $(".feature-post-slider").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
