$(document).ready(function(){

/* ----- Variable Declarations ----- */
  zeroed = true;

  numberIndex = 0;

  currentNumber = "";
  nextNumber = "";

  operation = "";
  equaled = false;

  operationStatus = false;

/* ----- Function Declarations ----- */
  function checkZero(){
    if(zeroed === true) {
      $("#screen-text").html("");
      zeroed = false;
    }
  }

  function multiplication(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").append(" x ");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "multiply";
    equaled = false;

    operationStatus = true;
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

    operationStatus = true;
  }

  function subtraction(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").append(" - ");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "subtract";
    equaled = false;

    operationStatus = true;
  }

  function totalEquals(){

    if(zeroed === true) {
      $("#screen-text").html(0);
    }

    else if(operation === "multiply"){
      currentNumber = parseInt(currentNumber, 10);
      nextNumber = parseInt(nextNumber, 10);

      currentNumber *= nextNumber;
      $("#screen-text").html(currentNumber);

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
    }

    else if(operation === "add"){
      currentNumber = parseInt(currentNumber, 10);
      nextNumber = parseInt(nextNumber, 10);

      currentNumber += nextNumber;
      $("#screen-text").html(currentNumber);

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
    }

    else if(operation === "subtract"){
      currentNumber = parseInt(currentNumber, 10);
      nextNumber = parseInt(nextNumber, 10);

      currentNumber -= nextNumber;
      $("#screen-text").html(currentNumber);

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
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
  });

  $("#button-2").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "2";
      console.log(numberIndex);
      $("#screen-text").append(2);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "2";
      console.log(numberIndex);
      $("#screen-text").append(2);
    }
  });

  $("#button-3").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "3";
      console.log(numberIndex);
      $("#screen-text").append(3);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "3";
      console.log(numberIndex);
      $("#screen-text").append(3);
    }
  });

  $("#button-4").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "4";
      console.log(numberIndex);
      $("#screen-text").append(4);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "4";
      console.log(numberIndex);
      $("#screen-text").append(4);
    }
  });

  $("#button-5").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "5";
      console.log(numberIndex);
      $("#screen-text").append(5);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "5";
      console.log(numberIndex);
      $("#screen-text").append(5);
    }
  });

  $("#button-6").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "6";
      console.log(numberIndex);
      $("#screen-text").append(6);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "6";
      console.log(numberIndex);
      $("#screen-text").append(6);
    }
  });

  $("#button-7").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "7";
      console.log(numberIndex);
      $("#screen-text").append(7);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "7";
      console.log(numberIndex);
      $("#screen-text").append(7);
    }
  });

  $("#button-8").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "8";
      console.log(numberIndex);
      $("#screen-text").append(8);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "8";
      console.log(numberIndex);
      $("#screen-text").append(8);
    }
  });

  $("#button-9").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "9";
      console.log(numberIndex);
      $("#screen-text").append(9);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "9";
      console.log(numberIndex);
      $("#screen-text").append(9);
    }
  });

  $("#button-0").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "0";
      console.log(numberIndex);
      $("#screen-text").append(0);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "0";
      console.log(numberIndex);
      $("#screen-text").append(0);
    }
  });

/* ----- Operation Fuction Executions ----- */
  $("#button-multiplication").on("click", function(){
    if(operationStatus === false) {
      multiplication();
    }
  });

  $("#button-division").on("click", function(){
  });

  $("#button-addition").on("click", function(){
    if(operationStatus === false) {
      addition();
    }
  });

  $("#button-subtraction").on("click", function(){
    if(operationStatus === false) {
      subtraction();
    }
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

    operationStatus = false;
  });

  $("#button-equals").on("click", function(){
    totalEquals();
  });

});
