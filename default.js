$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

      var swiper3 = new Swiper(".slide3", {
        slidesPerView: 6,
        loop : true,
        autoplay : {
          delay : 1000,
          disableOnInteraction: true,
        },
      });
});