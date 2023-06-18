import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

export default function sliders() {
  const lotSlider = document.querySelector(".hero-lot__slider");

  if (lotSlider) {
    const slider = new Swiper(lotSlider, {
      speed: 1000,
      simulateTouch: false,
      navigation: {
        nextEl: ".hero-lot__slider-btn--next",
        prevEl: ".hero-lot__slider-btn--prev",
      },
      pagination: {
        type: "bullets",
        clickable: true,
        el: ".hero-lot__slider-pagination"
      }
    });
  }
}
