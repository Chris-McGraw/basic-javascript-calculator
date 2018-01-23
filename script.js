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

  function totalEquals(){
    if(zeroed === true) {
      $("#screen-text").html(0);
    }
    else {
      $("#screen-text").html(currentNumber);
    }
  }

/* ----- Number Fuction Executions ----- */
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

  $("#button-4").on("click", function(){
    checkZero();
    currentNumber += "4";
    $("#screen-text").append(4);
  });

  $("#button-5").on("click", function(){
    checkZero();
    currentNumber += "5";
    $("#screen-text").append(5);
  });

  $("#button-6").on("click", function(){
    checkZero();
    currentNumber += "6";
    $("#screen-text").append(6);
  });

  $("#button-7").on("click", function(){
    checkZero();
    currentNumber += "7";
    $("#screen-text").append(7);
  });

  $("#button-8").on("click", function(){
    checkZero();
    currentNumber += "8";
    $("#screen-text").append(8);
  });

  $("#button-9").on("click", function(){
    checkZero();
    currentNumber += "9";
    $("#screen-text").append(9);
  });

  $("#button-0").on("click", function(){
    checkZero();
    currentNumber += "0";
    $("#screen-text").append(0);
  });

/* ----- Operation Fuction Executions ----- */
  $("#button-multiplication").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" x ");
  });

  $("#button-division").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" % ");
  });

  $("#button-addition").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" + ");
  });

  $("#button-subtraction").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" - ");
  });



  $("#button-positive-toggle").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" FIX ");
  });

  $("#button-decimal-point").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(".");
  });



  $("#button-clear").on("click", function(){
    $("#screen-text").html(0);
    zeroed = true;
    currentNumber = "";
  });

  $("#button-equals").on("click", function(){
    totalEquals();
  });

});
