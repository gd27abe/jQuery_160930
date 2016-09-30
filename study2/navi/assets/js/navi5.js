/*js file*/
$(function(){

  var $menu_title = $(".menu_title");
  var $menu       = $(".menu");
  var $list       = $(".menu li");
  var menu_toggle_spd = 200;

  var $container = $(".container");
  var $contents_box =$(".container__contents-box");

  $menu_title.click(
    function(){
      $menu.stop().slideToggle();
    }
  )

  $list.mouseover(
    function(){
      var index = $list.index($(this));
      $contents_box.eq(index).addClass("bg_black");
    }
  )

  $list.mouseout(
    function(){
      var index = $list.index($(this));
      $contents_box.eq(index).removeClass("bg_black");
    }
  )

})//end function
