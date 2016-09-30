/*js file*/
$(function(){

  var $btn = $(".btn1");
  var btn_fade_spd = 300;

  $btn.mouseover(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,0.5);
    }
  );

  $btn.mouseout(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,1);
    }
  );

  $btn.click(
    function(){
      $(this).css("opacity","0.2")
      $(this).stop().fadeTo(btn_fade_spd,1);
    }
  );



})//end function
