//ABOUT-ME SLIDER
var slides = $('.about-slider');
var slideCount = null;

$(function(){
  slides.slick({
    prevArrow: $('.prev-au'),
    nextArrow: $('.next-au'),
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

slides.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

slides.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.indicator').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.indicator').find('.current');
  $el.text(currentSlide + 1);
}

//COMMUNITY SLIDER
$(function(){
  $('.community-slider').slick({
    prevArrow: $('.prev-com'),
    nextArrow: $('.next-com'),
  });
});
