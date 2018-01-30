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
  negativeStatus = false;

/* ----- Function Declarations ----- */

  function checkZero(){
    if(zeroed === true) {
      $("#screen-text").html("");
      zeroed = false;
    }
  }

  function checkScreenSize(){
    if($("#screen-text").html().length > 15) {
      $("#screen-text").html("CHARACTER LIMIT");
    }
  }

  function checkScreenSizeAnswer(){
    if($("#screen-text").html().length > 15) {
      $("#screen-text").html("CHARACTER LIMIT");
    }
  }

  function addCommas(number){
    if(number.includes(".")){
      i = number.indexOf(".");
      decimalSlice = number.slice(i);
      number = number.slice(0,i);

      if(number.length === 12){
        newNumber = number.slice(0,3) + "," + number.slice(3,6) + "," + number.slice(6,9) + "," + number.slice(9) + decimalSlice;
      }
      else if(number.length === 11){
        newNumber = number.slice(0,2) + "," + number.slice(2,5) + "," + number.slice(5,8) + "," + number.slice(8) + decimalSlice;
      }
      else if(number.length === 10 && number[0] === "-"){
        newNumber = number.slice(0,4) + "," + number.slice(4,7) + "," + number.slice(7) + decimalSlice;
      }
      else if(number.length === 10 && number[0] !== "-"){
        newNumber = number.slice(0,1) + "," + number.slice(1,4) + "," + number.slice(4,7) + "," + number.slice(7) + decimalSlice;
      }

      else if(number.length === 9){
        newNumber = number.slice(0,3) + "," + number.slice(3,6) + "," + number.slice(6) + decimalSlice;
      }
      else if(number.length === 8){
        newNumber = number.slice(0,2) + "," + number.slice(2,5) + "," + number.slice(5) + decimalSlice;
      }
      else if(number.length === 7 && number[0] === "-"){
        newNumber = number.slice(0,4) + "," + number.slice(4) + decimalSlice;
      }
      else if(number.length === 7 && number[0] !== "-"){
        newNumber = number.slice(0,1) + "," + number.slice(1,4) + "," + number.slice(4) + decimalSlice;
      }

      else if(number.length === 6){
        newNumber = number.slice(0,3) + "," + number.slice(3) + decimalSlice;
      }
      else if(number.length === 5){
        newNumber = number.slice(0,2) + "," + number.slice(2) + decimalSlice;
      }
      else if(number.length === 4 && number[0] === "-"){
        newNumber = number + decimalSlice;
      }
      else if(number.length === 4 && number[0] !== "-"){
        newNumber = number.slice(0,1) + "," + number.slice(1) + decimalSlice;
      }

      else if(number.length <= 3){
        newNumber = number + decimalSlice;
      }
    }

    else{
      if(number.length === 12){
        newNumber = number.slice(0,3) + "," + number.slice(3,6) + "," + number.slice(6,9) + "," + number.slice(9);
      }
      else if(number.length === 11){
        newNumber = number.slice(0,2) + "," + number.slice(2,5) + "," + number.slice(5,8) + "," + number.slice(8);
      }
      else if(number.length === 10 && number[0] === "-"){
        newNumber = number.slice(0,4) + "," + number.slice(4,7) + "," + number.slice(7);
      }
      else if(number.length === 10 && number[0] !== "-"){
        newNumber = number.slice(0,1) + "," + number.slice(1,4) + "," + number.slice(4,7) + "," + number.slice(7);
      }

      else if(number.length === 9){
        newNumber = number.slice(0,3) + "," + number.slice(3,6) + "," + number.slice(6);
      }
      else if(number.length === 8){
        newNumber = number.slice(0,2) + "," + number.slice(2,5) + "," + number.slice(5);
      }
      else if(number.length === 7 && number[0] === "-"){
        newNumber = number.slice(0,4) + "," + number.slice(4);
      }
      else if(number.length === 7 && number[0] !== "-"){
        newNumber = number.slice(0,1) + "," + number.slice(1,4) + "," + number.slice(4);
      }

      else if(number.length === 6){
        newNumber = number.slice(0,3) + "," + number.slice(3);
      }
      else if(number.length === 5){
        newNumber = number.slice(0,2) + "," + number.slice(2);
      }
      else if(number.length === 4 && number[0] === "-"){
        newNumber = number;
      }
      else if(number.length === 4 && number[0] !== "-"){
        newNumber = number.slice(0,1) + "," + number.slice(1);
      }
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
    negativeStatus = false;
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
    negativeStatus = false;
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
    negativeStatus = false;

    /* newNumber = ""; */
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
    negativeStatus = false;
  }

  function addDecimal() {
    if(zeroed === true) {
      zeroed = false;
      currentNumber = "0";
    }

    if(numberIndex === 0 && equaled === false) {
      currentNumber += ".";
      $("#screen-text").append(".");
    }

    else if(nextNumber === "" && numberIndex === 1 && equaled === false) {
      nextNumber += "0.";
      $("#screen-text").append("0.");
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += ".";
      $("#screen-text").append(".");
    }
    decimalStatus = true;
  }

  function negativeToggle() {
    if(zeroed === false && numberIndex === 0 && equaled === false) {
      currentNumber = "-" + currentNumber;
      $("#screen-text").prepend("-");
      negativeStatus = true;
    }

    else if(numberIndex === 1 && equaled === false && nextNumber.length >= 1) {
      nextNumber = "-" + nextNumber;
      $("#screen-text").prepend("-");
      negativeStatus = true;
    }

    if(equaled === false) {
      checkScreenSize();
    }
  }

  function totalEquals() {
    if(zeroed === true) {
      $("#screen-text").html(0);
    }

    else if(operation === "multiply" && nextNumber !== ""){
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

    else if(operation === "divide" && nextNumber !== ""){
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

    else if(operation === "add" && nextNumber !== ""){
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

    else if(operation === "subtract" && nextNumber !== ""){
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
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

    if(equaled === false) {
      checkScreenSize();
    }
  });

  $("#button-0").on("click", function(){
    checkZero();

    if(numberIndex === 0 && equaled === false){
      currentNumber += "0";

      if(currentNumber.length <= 3){
        $("#screen-text").html(currentNumber);
      }

      else if(currentNumber.length > 3){
        addCommas(currentNumber);
        $("#screen-text").html(newNumber);

        console.log(currentNumber);
      }

      if(currentNumber.length > 12){
        currentNumber = "CHARACTER LIMIT";

        equaled = true;
        operationStatus = true;
        decimalStatus = true;

        $("#screen-text").html(currentNumber);
      }
    }

    else if(numberIndex === 1 && equaled === false) {
      nextNumber += "0";

      if(nextNumber.length <= 3){
        $("#screen-text").html(nextNumber);
      }

      else if(nextNumber.length > 3){
        addCommas(nextNumber);
        $("#screen-text").html(newNumber);

        console.log(nextNumber);
      }

      if(nextNumber.length > 12){
        nextNumber = "CHARACTER LIMIT";

        equaled = true;
        operationStatus = true;
        decimalStatus = true;

        $("#screen-text").html(nextNumber);
      }
    }
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

  $("#button-decimal-point").on("click", function(){
    if(decimalStatus === false){
      addDecimal();
    }
  });

  $("#button-positive-toggle").on("click", function(){
    if(negativeStatus === false) {
      negativeToggle();
    }
  });

  $("#button-equals").on("click", function(){
    totalEquals();
  });

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
    negativeStatus = false;
  });

});
