$(document).ready(function(){

/* ----- Variable Declarations ----- */

  zeroed = true;

  numberIndex = 0;

  currentNumber = "";
  nextNumber = "";

  operation = "";
  equaled = false;

  operationStatus = false;
  decimalStatus = false;

/* ----- Function Declarations ----- */

  function checkZero(){
    if(zeroed === true) {
      $("#screen-text").html("");
      zeroed = false;
    }
  }

  function checkScreenSize(){
    if($("#screen-text").html().length > 12) {
      $("#screen-text").html("CHARACTER LIMIT");
    }
  }

  function checkScreenSizeAnswer(){
    if($("#screen-text").html().length > 15) {
      $("#screen-text").html("CHARACTER LIMIT");
    }
  }

  function multiplication(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").html("");
    $("#button-multiplication").addClass("button-pressed");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "multiply";
    equaled = false;

    operationStatus = true;
    decimalStatus = false;
  }

  function division(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").html("");
    $("#button-division").addClass("button-pressed");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "divide";
    equaled = false;

    operationStatus = true;
    decimalStatus = false;
  }

  function addition(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").html("");
    $("#button-addition").addClass("button-pressed");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "add";
    equaled = false;

    operationStatus = true;
    decimalStatus = false;
  }

  function subtraction(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    $("#screen-text").html("");
    $("#button-subtraction").addClass("button-pressed");

    if(numberIndex === 0){
      numberIndex = 1;
    }

    operation = "subtract";
    equaled = false;

    operationStatus = true;
    decimalStatus = false;
  }

  function addDecimal(){
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    if(numberIndex === 0 && equaled === false){
      currentNumber += ".";
      $("#screen-text").append(".");
    }

    else if(nextNumber === "" && numberIndex === 1 && equaled === false){
      nextNumber += ".";
      $("#screen-text").append("0.");
    }

    else if(numberIndex === 1 && equaled === false){
      nextNumber += ".";
      $("#screen-text").append(".");
    }
    decimalStatus = true;
  }

  function totalEquals(){

    if(zeroed === true) {
      $("#screen-text").html(0);
    }

    else if(operation === "multiply"){
      currentNumber = parseFloat(currentNumber, 10);
      nextNumber = parseFloat(nextNumber, 10);

      currentNumber *= nextNumber;

      currentNumber = Math.round(100 * currentNumber)/100;

      $("#screen-text").html(currentNumber.toLocaleString());
      $("#button-multiplication").removeClass("button-pressed");

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
    }

    else if(operation === "divide"){
      currentNumber = parseFloat(currentNumber, 10);
      nextNumber = parseFloat(nextNumber, 10);

      currentNumber /= nextNumber;

      currentNumber = Math.round(100 * currentNumber)/100;

      $("#screen-text").html(currentNumber.toLocaleString());
      $("#button-division").removeClass("button-pressed");

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
    }

    else if(operation === "add"){
      currentNumber = parseFloat(currentNumber, 10);
      nextNumber = parseFloat(nextNumber, 10);

      currentNumber += nextNumber;

      currentNumber = Math.round(100 * currentNumber)/100;

      $("#screen-text").html(currentNumber.toLocaleString());
      $("#button-addition").removeClass("button-pressed");

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
    }

    else if(operation === "subtract"){
      currentNumber = parseFloat(currentNumber, 10);
      nextNumber = parseFloat(nextNumber, 10);

      currentNumber -= nextNumber;

      currentNumber = Math.round(100 * currentNumber)/100;

      $("#screen-text").html(currentNumber.toLocaleString());
      $("#button-subtraction").removeClass("button-pressed");

      nextNumber = "";
      operation = "";
      equaled = true;

      operationStatus = false;
    }

    checkScreenSizeAnswer();
  }

/* ----- Number Button Function Executions ----- */

  $("#button-1").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "1";
      $("#screen-text").append(1);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "1";
      $("#screen-text").append(1);
    }

    checkScreenSize();
  });

  $("#button-2").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "2";
      $("#screen-text").append(2);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "2";
      $("#screen-text").append(2);
    }

    checkScreenSize();
  });

  $("#button-3").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "3";
      $("#screen-text").append(3);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "3";
      $("#screen-text").append(3);
    }

    checkScreenSize();
  });

  $("#button-4").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "4";
      $("#screen-text").append(4);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "4";
      $("#screen-text").append(4);
    }

    checkScreenSize();
  });

  $("#button-5").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "5";
      $("#screen-text").append(5);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "5";
      $("#screen-text").append(5);
    }

    checkScreenSize();
  });

  $("#button-6").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "6";
      $("#screen-text").append(6);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "6";
      $("#screen-text").append(6);
    }

    checkScreenSize();
  });

  $("#button-7").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "7";
      $("#screen-text").append(7);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "7";
      $("#screen-text").append(7);
    }

    checkScreenSize();
  });

  $("#button-8").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "8";
      $("#screen-text").append(8);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "8";
      $("#screen-text").append(8);
    }

    checkScreenSize();
  });

  $("#button-9").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "9";
      $("#screen-text").append(9);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "9";
      $("#screen-text").append(9);
    }

    checkScreenSize();
  });

  $("#button-0").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "0";
      $("#screen-text").append(0);
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "0";
      $("#screen-text").append(0);
    }

    checkScreenSize();
  });

/* ----- Operation Button Function Executions ----- */

  $("#button-multiplication").on("click", function(){
    if(operationStatus === false) {
      multiplication();
    }
  });

  $("#button-division").on("click", function(){
    if(operationStatus === false) {
      division();
    }
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

/* !!! ----- WORK IN PROGRESS STARTS ----- !!! */

  $("#button-positive-toggle").on("click", function(){
    if(zeroed === true) {
      zeroed = false;
    }
    $("#screen-text").append(" FIX ");
  });

/* !!! ----- WORK IN PROGRESS ENDS !!! ----- */


  $("#button-decimal-point").on("click", function(){
    if(decimalStatus === false){
      addDecimal();
    }
  });

/* ----- Bottom Button Function Executions ----- */

  $("#button-clear").on("click", function(){
    $("#screen-text").html(0);
    $("#button-multiplication").removeClass("button-pressed");
    $("#button-division").removeClass("button-pressed");
    $("#button-addition").removeClass("button-pressed");
    $("#button-subtraction").removeClass("button-pressed");

    zeroed = true;
    numberIndex = 0;
    currentNumber = "";
    nextNumber = "";
    equaled = false;

    operationStatus = false;
    decimalStatus = false;
  });

  $("#button-equals").on("click", function(){
    totalEquals();
  });

});
