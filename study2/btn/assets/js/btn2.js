/*js file*/
$(function(){

  $(".btn1").mouseover(
    function(){
      $(this).fadeTo(300,0.5);
    }
  );

  $(".btn1").mouseout(
    function(){
      $(this).fadeTo(300,1);
    }
  );

})//end function
