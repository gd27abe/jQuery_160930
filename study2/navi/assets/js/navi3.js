/*js file*/
$(function(){

  var $menu_title = $(".menu_title");
  var $menu       = $(".menu");
  var $open       =   "navi--open";
  var $close      =   "navi--close";

  $menu_title.click(
    function(){
      if( $menu.hasClass($close) == true ){
          $menu.addClass($open);
          $menu.removeClass($close);
      }else{
          $menu.addClass($close);
          $menu.removeClass($open);
      }
    }
  )

})//end function
