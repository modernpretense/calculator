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

// Display
const calcDisplay = document.querySelector('#calcdisplay');

// const setDisplay = function(number) {
//     calcDisplay.innerText = number;
// }

// Memory
let storedValue;
let activeValue;
let activeOperator; // 'addition', 'subtraction', 'multiplication', 'division', 'reset'

// Buttons

const numBtnPress = function (number) {
    if (activeValue === undefined || activeValue === 0) {
        activeValue = `${number}`;
    } else {
    activeValue = `${number}${activeValue}`;
    }
    calcDisplay.innerText = activeValue;
}

const cBtnPress = function () {
    activeValue = 0;
    calcDisplay.innerText = activeValue;
}

const acBtnPress = function () {
    activeValue = 0;
    storedValue = 0;
    activeOperator = 'reset';
    calcDisplay.innerText = activeValue;
}

const setActiveOperator = function (operator) {
    activeOperator = operator;
}

