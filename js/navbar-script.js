$(function(){
  var homeOffSet = $('#home').offset().top,
      welcomeOffSet = $('#welcome').offset().top,
      aboutUsOffSet = $('#about-us').offset().top;

  $(document).scroll(function(){
    if ($(document).scrollTop() >= homeOffSet && $(document).scrollTop() < welcomeOffSet){
      $('.navbar').css('background', 'none');
      $('.navbar').css('transition', '.3s');
    } else if (($(document).scrollTop() >= welcomeOffSet) && ($(document).scrollTop() < aboutUsOffSet)){
      $('.navbar').css('background', 'rgb(43, 30, 41)');
      $('.navbar').css('transition', '.3s');
    }
  });

});
