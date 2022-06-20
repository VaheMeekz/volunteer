import React from "react";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export default settings;
