'use strict';

(function(){
  function hover (selector) {
    $(selector).hover(
      function(){
      $(this).fadeOut(50);
    }, function(){
      $(this).fadeIn(50);
    });
  }

  function changeText (selector) {
    var text = $(selector).text();
    console.log(text);
    $(selector).hover(
      function(){
        if (text == '参 观') {$(this).text('VISIT')};
        if (text == '影 像') {$(this).text('IMAGES')};
        if (text == '争 鸣') {$(this).text('VIEW POINTS')};
        if (text == '经 历') {$(this).text('EXPERIENCE')};
    },function(){
      $(this).text(text);
    });
  }


  hover('.quater-mask-1');
  hover('.quater-mask-2');
  hover('.quater-mask-3');
  hover('.quater-mask-4');

  changeText('#hoverlink1');
  changeText('#hoverlink2');
  changeText('#hoverlink3');
  changeText('#hoverlink4');

// index页左右两部分hover
  $('.index-left').hover(function(){

    $('#szheading').show();
    TweenMax.to('#logo-half-s', 0.8, {
      opacity: 1,
      delay: 0.2,
      right: 0
    });

    TweenMax.to('#head-text-left', 0.8, {
      transform: 'rotate(0deg)',
      delay: 0.2,
      opacity: 1
    });

    TweenMax.to('#head-hand-left', 1, {
      opacity: 1,
      delay: 0.8
    });

    TweenMax.to('#head-hand-left', 0.5, {
      repeat: -1,
      yoyo: true,
      scale: 1.1
    });


  }, function(){

    $('#szheading').hide();
    TweenMax.to('#logo-half-s', 0, {
      opacity: 0,
      right: '-100px'
    });

    TweenMax.to('#head-text-left', 0, {
      transform: 'rotate(-24deg)',
      opacity: 0
    });

    TweenMax.to('#head-hand-left', 0, {
      opacity: 0,
      scale: 1
    });

  });

  $('.index-right').hover(function(){

    // 让青岛二中校徽压下
    $('.index-left').css('z-index', '99999');

    $('#ezheading').show();
    TweenMax.to('#logo-half-e', 0.8, {
      opacity: 1,
      delay: 0.2,
      left: 0
    });
    TweenMax.to('#head-text-right', 0.8, {
      transform: 'rotate(0deg)',
      delay: 0.2,
      opacity: 1
    });
    TweenMax.to('#head-hand-right', 1, {
      opacity: 1,
      delay: 0.8
    });

    TweenMax.to('#head-hand-right', 0.5, {
      repeat: -1,
      yoyo: true,
      scale: 1.1
    });

  }, function(){

    $('.index-left').css('z-index', 'initial');

    $('#ezheading').hide();
    TweenMax.to('#logo-half-e', 0, {
      opacity: 0,
      left: '-100px'
    });
    TweenMax.to('#head-text-right', 0, {
      transform: 'rotate(-24deg)',
      opacity: 0
    });
    TweenMax.to('#head-hand-right', 0, {
      opacity: 0,
      scale: 1
    });
  });

}());
