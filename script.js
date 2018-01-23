$(document).ready(function(){

/* ----- Variable Declarations ----- */
  zeroed = true;

  numberIndex = 0;

  currentNumber = "";
  nextNumber = "";

  operation = "";

  equaled = false;

/* ----- Function Declarations ----- */
  function checkZero(){
    if(zeroed === true) {
      $("#screen-text").html("");
      zeroed = false;
    }
  }

  function addition(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").append(" + ");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "add";

    equaled = false;
  }

  function totalEquals(){
    /* currentNumber = parseInt(currentNumber, 10);
    nextNumber = parseInt(nextNumber, 10); */

    if(zeroed === true) {
      $("#screen-text").html(0);
    }
    else if(operation === "add"){
      currentNumber = parseInt(currentNumber, 10);
      nextNumber = parseInt(nextNumber, 10);

      currentNumber += nextNumber;
      $("#screen-text").html(currentNumber);

      nextNumber = "";
      operation = "";

      equaled = true;
    }
  }

/* ----- Number Fuction Executions ----- */
  $("#button-1").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "1";
      console.log(numberIndex);
      $("#screen-text").append(1);
    }
    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "1";
      console.log(numberIndex);
      $("#screen-text").append(1);
    }

    /* $("#screen-text").append(1); */
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
    addition();
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
    numberIndex = 0;
    currentNumber = "";
    nextNumber = "";

    equaled = false;
  });

  $("#button-equals").on("click", function(){
    totalEquals();
  });

});
