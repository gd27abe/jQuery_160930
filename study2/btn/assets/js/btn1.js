/*js file*/
$(function(){

  $(".btn1").mouseover(
    function(){
      $(this).css("opacity","0.5");
    }
  );

  $(".btn1").mouseout(
    function(){
      $(this).css("opacity","1");
    }
  );


})//end function
