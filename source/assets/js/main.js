
// import Testy from './app/Testy';
// var example = new Testy();
// example.testFunc();

import $ from 'jquery';
import 'cookie';

$(document).ready(function(){

  $('.js-jumplink').each(function(){
    $(this).on('click', function(e){
      var targ = $(this).attr('href');
      console.log($(targ));
      $('html, body').stop().animate({
        scrollTop : ($(targ).offset().top - 85)
      }, 500);
      e.preventDefault();
    });
  });

  $('.js-mobile-toggle').on('click', function(e){
    $('.main-nav').toggleClass('isActive');
    $(this).toggleClass('isActive');
    e.preventDefault();
  });

  if(!$.cookie('ces')){
    setTimeout(function(){
      $('.popup').addClass('isActive');
      $('.js-popup-close').on('click', function(){
        $('.popup').remove();
        $.cookie('ces', 'true', { expires: 360 });
      });
    },3000);
  }else{
    $('.popup').remove();
  }

});
