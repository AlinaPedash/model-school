$(function(){

  $('.menu__btn').on('click', function(){
 $('.menu__list').toggleClass('menu__list--active');
  });

  $('.splash__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500

  });
});