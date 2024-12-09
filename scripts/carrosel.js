var swiper = new Swiper(".swiper-container", {
    loop: true,
    mousewheel: {
        invert: false,
        interval: 400
      },
      spaceBetween: 0,
      navigation: {
        prevEl: ".anterior",
        nextEl: ".proximo"
      },
      plugins: [SwiperPluginNavigation]
    }
);