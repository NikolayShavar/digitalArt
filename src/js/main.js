$(".center").slick({
  centerMode: true,
  centerPadding: "120px",
  rows: 2,
  initialSlide: 1,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $(".choose-arrows__left"),
  nextArrow: $(".choose-arrows__right"),
  infinite: false,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        centerPadding: "10px",
        rows: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        rows: 1,
        slidesToShow: 2,
        centerPadding: "100px",
        arrows: false,
      },
    },
  ],
});

$(".center-row").slick({
  centerMode: true,
  centerPadding: "330px",
  initialSlide: 1,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".choose-combo-arrows__left"),
  nextArrow: $(".choose-combo-arrows__right"),
  infinite: false,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 2,
        centerPadding: "250px",
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px",
      },
    },

    
  ],
});

$(".center").on("afterChange", function (event, slick, currentSlide) {
  $(".choose-arrows__left").toggle(currentSlide !== 0);
  $(".choose-arrows__right").toggle(currentSlide !== slick.slideCount - 1);
});

$(".center-row").on("afterChange", function (event, slick, currentSlide) {
  $(".choose-combo-arrows__left").toggle(currentSlide !== 0);
  $(".choose-combo-arrows__right").toggle(currentSlide !== slick.slideCount - 1);
});