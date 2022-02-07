$(function (){


  // не сработало у меня
  // let i = 0;
  // $(".quantity__input").each(function () {
  //   i++;
  //   $(this).attr("id", "item" + i);
  // });

  //  let ii = 0;
  // $(".quantity__label").each(function () {
  //   i++;
  //   $(this).attr("for", "item" + ii);
  // });



  $('.promotion-slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icons-right-arrow.svg"></button>',
    
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
