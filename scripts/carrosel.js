Swiper.use([SwiperPluginPagination, SwiperPluginNavigation]);

// Cada carrosel é uma instância da classe Swiper

const swiperBiblioteca = new Swiper("#swiper-biblioteca", {
  loop: true,
  pagination: {
    el: "#swiper-biblioteca .swiper-plugin-pagination",
    clickable: true,
    bulletClass: "swiper-plugin-pagination__item", // Corrected
    bulletActiveClass: "is-active",
  },
  mousewheel: {
    invert: false,
    interval: 400,
  },
  spaceBetween: 0,
  navigation: {
    prevEl: "#swiper-biblioteca .anterior",
    nextEl: "#swiper-biblioteca .proximo",
  },
});

const swiperInicial = new Swiper("#swiper-inicial", {
  loop: true,
  pagination: {
    el: "#swiper-inicial .swiper-plugin-pagination",
    clickable: true,
    bulletClass: "swiper-plugin-pagination__item", // Corrected
    bulletActiveClass: "is-active",
  },
  mousewheel: {
    invert: false,
    interval: 400,
  },
  spaceBetween: 0,
  navigation: {
    prevEl: "#swiper-inicial .anterior",
    nextEl: "#swiper-inicial .proximo",
  },
});
