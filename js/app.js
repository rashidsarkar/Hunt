$(".banar_slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
});
$(".main_slider_servise").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-arrow-up prev" aria-hidden="true"></i',
  nextArrow: '<i class="fa fa-arrow-down next " aria-hidden="true"></i',
  centerMode: true,

  vertical: true,
  verticalSwiping: true,
  centerPadding: "0px",
});
$(".slider_out_work").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  centerMode: true,

  vertical: true,
  verticalSwiping: true,
  centerPadding: "0px",
});
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
