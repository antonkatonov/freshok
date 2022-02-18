$(function (){

  $('.content-filter__button').on('click', function(){
    $('.content-filter__button').removeClass('content-filter__button--active');
    $(this).addClass('content-filter__button--active');
  });

  $('.content-filter__button--mob').on('click', function(){
     $('.shop-filter').addClass('shop-filter--active');
     $('body').addClass('lock');
  });

  $('.shop-filter__close-btn').on('click', function(){
     $('.shop-filter').removeClass('shop-filter--active');
     $('body').removeClass('lock');
  });
 
  $('.content-filter__button--num6').on('click', function () {
     $('.shop-products').addClass('shop-products--num6');
  });

  $('.content-filter__button--num9').on('click', function () {
     $('.shop-products').removeClass('shop-products--num6');
  });

  $('.filter-price__input').ionRangeSlider( {
    type: "double",

    onStart: function (data) { 
      $('.filter-price__value--from').text(data.from);
      $('.filter-price__value--to').text(data.to);
    },

     onChange: function (data) {
       $('.filter-price__value--from').text(data.from);
       $('.filter-price__value--to').text(data.to);
      },
  });

  $('.content-filter__list').styler();


  $('.promotion-slider__list').slick({
    infinite: false,
    prevArrow: $('.promotion-slider__btn--prew'),
    nextArrow: $('.promotion-slider__btn--next'),
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        dots: true
      }
    },]
  });

  $('.partners__list').slick({
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },]
  });


  $('.catalog').on('click', function(){
     $('.catalog__btn').toggleClass('catalog__btn--active');
    // $('.catalog__list').fadeToggle();
 });

  $('.shop-filter__btn').on('click', function(){
     $('.shop-filter__btn').toggleClass('shop-filter__btn--active');
     $('.shop-filter__list').slideToggle();
 });


  $(".catalog__btn").on('click', function() {
     $('.catalog__list').toggle();
  });
 
  $(document).on('click', function(e) {
  if (!$(e.target).closest(".catalog").length) {
     $('.catalog__list').hide();
     $('.catalog__btn').removeClass('catalog__btn--active');
   }
  e.stopPropagation();
  });

  $('.header-top__btn').on('click', function(){
     $('.menu').toggle();
     $('body').toggleClass ('lock');
  });

  $('.menu__close-btn').on('click', function(){
     $('.menu').hide();
     $('body').removeClass ('lock');
  });

  $('.user-nav__item--search').on('click', function(){
     $('.form-search').toggleClass('form-search--active');
  });



  $('.user-nav__link--cart').on('click', function(){
     $('.cart-box').toggleClass('cart-box--active');
     $('body').toggleClass ('lock');
  });


  $('.cart-box__close-btn').on('click', function(){
     $('.cart-box').removeClass('cart-box--active');
     $('body').removeClass ('lock');
  });


  $(".stock-item__stars").rateYo({
    starWidth: "16px",
    numStars: 1,
    ratedFill: "#FFB800",
    readOnly: true,
    starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0.0229654 6.16432C0.0780897 5.9946 0.224746 5.87091 0.401307 5.84529L5.36138 5.12451L7.57965 0.629933C7.65859 0.469933 7.82156 0.368652 7.99996 0.368652C8.1784 0.368652 8.34134 0.469933 8.42031 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4364 15.5776L8 13.2451L3.56373 15.5775C3.40576 15.6606 3.21442 15.6467 3.07008 15.5419C2.92574 15.437 2.85339 15.2593 2.88355 15.0834L3.73095 10.1434L0.141559 6.64478C0.0138092 6.52028 -0.0322227 6.334 0.0229654 6.16432Z"></path></svg>',
  });

  $().fancybox({
  selector : '.product-top__slider .slick-slide:not(.slick-cloned)',
  backFocus : false,
  afterShow : function( instance, current ) {
    current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
  }
  });

  $(".product-top__slider").slick({
  slidesToShow   : 1,
  infinite : true,
  dots     : true,
  arrows   : false
  });

  $(document).on('click', '.slick-cloned', function(e) {
  var $slides = $(this)
    .parent()
    .children('.slick-slide:not(.slick-cloned)');

  $slides
    .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
    .trigger("click.fb-start", { $trigger: $(this) });

  return false;
  });
  
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});
