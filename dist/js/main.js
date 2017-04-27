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

}());
