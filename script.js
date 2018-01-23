$(document).ready(function(){

/* ----- Variable Declarations ----- */
  zeroed = true;
  currentNumber = "";

/* ----- Function Declarations ----- */
  function checkZero(){
    if(zeroed === true) {
      $("#screen-text").html("");
      zeroed = false;
    }
  }

  $("#button-1").on("click", function(){
    checkZero();

    currentNumber += "1";

    $("#screen-text").append(1);
  });

  $("#button-2").on("click", function(){
    checkZero();

    currentNumber += "2";

    $("#screen-text").append(2);
  });

  $("#button-3").on("click", function(){
    checkZero();

    currentNumber += "3";

    $("#screen-text").append(3);
  });

  $("#button-multiplication").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" x ");
  });

  $("#button-4").on("click", function(){
    checkZero();
    $("#screen-text").append(4);
  });

  $("#button-5").on("click", function(){
    checkZero();
    $("#screen-text").append(5);
  });

  $("#button-6").on("click", function(){
    checkZero();
    $("#screen-text").append(6);
  });

  $("#button-division").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" % ");
  });



  $("#button-clear").on("click", function(){
    $("#screen-text").html(0);
    zeroed = true;
    currentNumber = "";
  });

  $("#button-equals").on("click", function(){
    $("#screen-text").html(currentNumber);
  });
});
