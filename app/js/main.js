$(function (){

  $('.promotion-slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-left-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icons-right-arrow.svg" alt=""></button>',
    
  });

  $('.catalog').on('click', function(){
    $('.catalog').toggleClass('catalog--active');
    $('.catalog__list').fadeToggle();
 });


  $('.user-nav__link--cart').on('click', function(){
    $('.cart-box').toggleClass('cart-box--active');
    $('body').toggleClass ('lock');
 });

 $('.cart-box__close-btn').on('click', function(){
   $('.cart-box').removeClass('cart-box--active');
   $('body').removeClass ('lock');
 });
 

 var mixer = mixitup('.top-products__list');


});