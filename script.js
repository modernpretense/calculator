// Calculator Javascript
"use strict";

// Operators
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operate = (operator, a, b) => {
    if (operator === 'add') {
        return add(a, b);
    } else if (operator === 'subtract') {
        return subtract(a, b);
    } else if (operator === 'multiply') {
        return multiply(a, b);
    } else if (operator === 'divide') {
        return divide(a, b);
    } else {
        return 'Error';
    }
}

// Display
const calcDisplay = document.querySelector('#calcdisplay');

const setDisplay = (number) => {
    calcDisplay.innerText = number;
}

// Global variables
let storedNumber = 0;
let activeNumber;
let activeOperator; // 'add, 'subtract', 'multiply', 'divide', 'reset'

// Buttons

const numBtnPress = function (btnNumber) {
    if (activeNumber === undefined || activeNumber === 0) {
        activeNumber = Number(`${btnNumber}`);
    } else {
    activeNumber = Number(`${activeNumber}${btnNumber}`);
    }
    setDisplay(activeNumber);
}

const cBtnPress = function () {
    activeNumber = 0;
    setDisplay(storedNumber);
}

const acBtnPress = function () {
    activeNumber = 0;
    storedNumber = 0;
    activeOperator = 'reset';
    setDisplay(activeNumber);
}

const setActiveOperator = function (operatorInput) {
    activeOperator = operatorInput;
    if (activeNumber === undefined) {
        return;
    } else if (activeOperator === 'reset' || activeOperator === undefined) {
        storedNumber = activeNumber;
    }else {
        storedNumber = operate(`${operatorInput}`, storedNumber, activeNumber);
    }
    activeNumber = 0;
    setDisplay(storedNumber);
}

const equalsBtnPress = function () {
    let sum = 0;
    if (activeOperator === 'reset' || activeOperator === undefined) {
        return;
    } else if (activeOperator === 'add') {
        sum = operate('add', storedNumber, activeNumber);
    }    else if (activeOperator === 'subtract') {
            sum = operate('subtract', storedNumber, activeNumber);
    }
    activeNumber = 0;
    storedNumber = sum;
    activeOperator = 'reset';
    sum = 0;
    setDisplay(storedNumber);
}
