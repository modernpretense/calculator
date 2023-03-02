// Calculator Javascript
"use strict";

const add = function(numOne, numTwo) {
    return numOne + numTwo;
}
const subtract = function(numOne, numTwo) {
    return numOne - numTwo;
}
const multiply = function(numOne, numTwo) {
    return numOne * numTwo;
}
const divide = function(numOne, numTwo) {
    return numOne / numTwo;
}


const operate = function(operator, numOne, numTwo) {
    if (operator === 'add') {
       return add(numOne, numTwo);
    } else if (operator === 'subtract') {
       return subtract(numOne, numTwo);
    }else if (operator === 'multiply') {
       return multiply(numOne, numTwo);
    }else if (operator === 'divide') {
       return divide(numOne, numTwo);
    }else {
        return 'Error';
    }
}