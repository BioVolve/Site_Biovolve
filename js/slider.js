var carrossel = new Carrossel(".container-carrossel", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    }
  });