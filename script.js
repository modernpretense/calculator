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

const setDisplay = function(number) {
     calcDisplay.innerText = number;
 }

// Memory
let storedValue = 0;
let activeValue;
let activeOperator; // 'addition', 'subtraction', 'multiplication', 'division', 'reset'

// Buttons

const numBtnPress = function (number) {
    if (activeValue === undefined || activeValue === 0) {
        activeValue = Number(`${number}`);
    } else {
    activeValue = Number(`${activeValue}${number}`);
    }
    setDisplay(activeValue);
}

const cBtnPress = function () {
    activeValue = 0;
    setDisplay(storedValue);
}

const acBtnPress = function () {
    activeValue = 0;
    storedValue = 0;
    activeOperator = 'reset';
    setDisplay(activeValue);
}

const setActiveOperator = function (operator) {
    activeOperator = operator;
    if (activeValue === undefined) {
        return;
    } else if (activeOperator = 'addition') {
        storedValue = operate('add', storedValue, activeValue);
    } else if (activeOperator = 'subtraction') {
        storedValue = operate('subtract', storedValue, activeValue);
    }
    activeValue = 0;
    setDisplay(storedValue);
}

const equalsBtnPress = function () {
    let sum = 0;
    if (activeOperator === 'reset' || activeOperator === undefined) {
        return;
    } else if (activeOperator = 'addition') {
        sum = operate('add', storedValue, activeValue);
    }
    activeValue = 0;
    storedValue = sum;
    activeOperator = 'reset';
    sum = 0;
    setDisplay(storedValue);
}
