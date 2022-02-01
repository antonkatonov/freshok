$(function (){

  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-left-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icons-right-arrow.svg" alt=""></button>',
  });

  $('.menu').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.menu__items').fadeToggle();
 });


  $('.menu').on('click', function(){
   $('.menu__wrap').removeClass('menu__wrap--active');
 });
 
  $('#num1').on('keyup', function() {
    $("#res").text($(this).val());
 })



});