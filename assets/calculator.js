$(document).ready(function(){

// Your code here...
var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = 0;
var hasNumber = false;
var firstNumberComplete = false;
var lockButtons = false;

$(document).on("click", "button", function(){
    if ($(this).hasClass("number") && !lockButtons) {
        hasNumber = true;
        if (firstNumberComplete === false) {
            firstNumber += $(this).attr("value");
            console.log(firstNumber);
            $("#first-number").html(firstNumber);
        }
        else {
            secondNumber += $(this).attr("value");
            console.log(secondNumber);
            $("#second-number").html(secondNumber);
        }
    }
    if ($(this).hasClass("operator") && hasNumber && !lockButtons) {
        firstNumberComplete = true;
        $("#operator").html("<h1>" + $(this).text() + "<h1>");
        operator = $(this).attr("value");
    }
    if ($(this).hasClass("equal")) {
        lockButtons = true;
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
    if (operator === "plus") {
        result = firstNumber + secondNumber;
    }
    if (operator === "minus") {
        result = firstNumber - secondNumber;
    }
    if (operator === "divide") {
        result = firstNumber / secondNumber;
    }
    if (operator === "power") {
        result = Math.pow(firstNumber, secondNumber);
        }
        $("#result").html(result);
    }
    if ($(this).hasClass("clear")) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = 0;
        hasNumber = false;
        firstNumberComplete = false;
        lockButtons = false;
        $("#first-number, #second-number, #operator,#result").empty(); 

        }
   });
  });