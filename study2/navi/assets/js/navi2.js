/*js file*/
$(function(){

  $(".menu_title").click(
    function(){
      if($(".menu").hasClass("navi--close") == true){
        $(".menu").addClass("navi--open");
        $(".menu").removeClass("navi--close");
      }else{
        $(".menu").addClass("navi--close");
        $(".menu").removeClass("navi--open");
      }
    }
  )

})//end function
