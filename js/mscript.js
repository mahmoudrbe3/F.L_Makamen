jQuery(document).ready(function($){
$('.owl-carousel').owlCarousel({rtl:true,loop:true,margin:0,nav:true,dots:true,autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,responsive:{0:{items:1},667:{items:1},1000:{items:1}}});
$('.owl-carousel1').owlCarousel({rtl:true,loop:true,margin:0,nav:true,navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],dots:true,autoplay:false,autoplayTimeout:5000,autoplayHoverPause:true,responsive:{0:{items:1},667:{items:1},1000:{items:1}}});
$('.owl-carousel2').owlCarousel({rtl:true,loop:true,margin:0,nav:true,navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],dots:true,autoplay:false,autoplayTimeout:5000,autoplayHoverPause:true,responsive:{0:{items:1},667:{items:1},1000:{items:1}}});
$('.boxer').not('.retina, .boxer_fixed, .boxer_top, .boxer_format, .boxer_mobile, .boxer_object').boxer();
$('#srch-lnk').click(function(){$('#srch-bx').slideToggle('slow');});
$('.slider-for').slick({ //slider
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});});