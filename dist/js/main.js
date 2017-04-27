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

  hover('.quater-mask-1');
  hover('.quater-mask-2');
  hover('.quater-mask-3');
  hover('.quater-mask-4');


}());
