/*js file*/
$(function(){

  var $menu_title     = $(".menu_title");
  var $menu           = $(".menu");
  var menu_toggle_spd = 200;

  $menu_title.click(
    function(){
      $menu.stop().slideToggle();
    }
  )

})//end function
