
// import Testy from './app/Testy';
// var example = new Testy();
// example.testFunc();

import $ from 'jquery';
import 'cookie';

$(document).ready(() => {

  $('.js-video-lb').on('click', function(e){
    const $vid = $(this).attr('href');
    const $markup = `<div class="popup popup--video isActive"><div class="popup__inner"><button class="popup__close js-popup-close"><i class="fa fa-close"></i> close</button><iframe width="560" height="315" src="https://www.youtube.com/embed/T4Pb_6Yxfu0?autoplay=1&amp;showinfo=0&amp;controls=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><img src="http://i3.ytimg.com/vi/T4Pb_6Yxfu0/maxresdefault.jpg"></div></div>`;
    $('body').append($markup);
    setTimeout(() => {
      $('.js-popup-close').on('click', () => {
        $('.popup').remove();
      });
    },100);
    e.preventDefault();
  });

  if(!$.cookie('ban')){
    if(!$.cookie('ces')){
      $('.ipb').addClass('isActive');
      $('.js-bann-hide').on('click', function(e){
        $('.ipb').stop().animate({
          'opacity': 0
        }, function(){
          $(this).remove();
          $.cookie('ban', 'true');
        });
        if(!$(this).hasClass('js-allow')){
          e.preventDefault();
        }
      });
    }
  }

  $('.js-jumplink').each(function(){
    $(this).on('click', function(e){
      const targ = $(this).attr('href');
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

  if(!$.cookie('ban')){
    if(!$.cookie('ces')){
      setTimeout(() => {
        if(!$.cookie('ban')){
          $('.popup:not(.popup--video)').addClass('isActive');
          $('.js-popup-close').on('click', () => {
            $('.popup:not(.popup--video)').remove();
            $.cookie('ces', 'true');
          });
        }else{
          $('.popup:not(.popup--video)').remove();
        }
      },6000);
    }else{
      $('.popup:not(.popup--video)').remove();
    }
  }else{
    $('.popup:not(.popup--video)').remove();
  }

});
