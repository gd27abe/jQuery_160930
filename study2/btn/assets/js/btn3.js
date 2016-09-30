/*js file*/
$(function(){

  $(".btn1").mouseover(
    function(){
      $(this).stop().fadeTo(300,0.5);
    }
  );

  $(".btn1").mouseout(
    function(){
      $(this).stop().fadeTo(300,1);
    }
  );

})//end function
