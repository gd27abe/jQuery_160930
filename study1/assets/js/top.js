/*js file*/
$(function(){


  //testと言う変数を作り、
  //ブラウザのコンソールに２００を表示させる。
  num1 = 200;
  console.log(num1);

  //testと言う変数を作り
  //ブラウザのコンソールにおはようと表示させる。
  test = "おはよう";
  console.log(test);

  //関数の中に変数を入れて実行
  function testFunc(){
    num = 100;
    console.log(num);
  }
  testFunc();

  //ボタンを作成し、クリック時に実行
  $(".btn").click(
    function(){
      console.log("実行");
    }
  )

  //配列 0から数える
  numArr = [100,200,233,566,888];
  console.log(numArr[0]);

  //引数
  function hikisuFunc(num){
    console.log(num);
  }
  hikisuFunc(777);




})//end function
