const swiperTeacher = new Swiper('.swiper-teachers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
   // width: 300,
   loopPreventsSliding: true,
    autoplay: {
      delay: 3300,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
          // when window width is >= 640px
          840: {
            slidesPerView: 4,
            spaceBetween: 40
          }
    }
  });

  const swiperSuahili = new Swiper('.swiper-suahili', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
   delay: 2300,
 },
  });

  const swiperYoruba = new Swiper('.swiper-yoruba', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
   delay: 2200,
 },
  });

  const swiperAfricaans = new Swiper('.swiper-africaans', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
   delay: 2350,
 },
  });

  const swiperKrio = new Swiper('.swiper-krio', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
   delay: 2400,
 },
  });

  const swiperPidjin = new Swiper('.swiper-pidjin', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
   delay: 2300,
 },
  });

