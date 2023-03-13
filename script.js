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
let operatorPressed = false; // Flag to see if an operator-button has been pressed. Is cleared by next nummeral input.
let equalPressed = false;
let activeOperator; // 'add, 'subtract', 'multiply', 'divide', 'reset'

// Buttons

const numBtnPress = function (btnNumber) {
    checkOperatorPressed();
    if (activeNumber === undefined || activeNumber === 0 || equalPressed === true) {
        activeNumber = Number(`${btnNumber}`);
        equalPressed = false;
    } else {
    activeNumber = Number(`${activeNumber}${btnNumber}`);
    }
    setDisplay(activeNumber);
}

const cBtnPress = function () {
    activeNumber = storedNumber;
    storedNumber = 0;
    activeOperator = 'reset';
    operatorPressed = false;
    setDisplay(activeNumber);
}

const acBtnPress = function () {
    activeNumber = 0;
    storedNumber = 0;
    activeOperator = 'reset';
    operatorPressed = false;
    equalPressed = false;
    setDisplay(activeNumber);
}

const setActiveOperator = function (operatorInput) {
    activeOperator = operatorInput;
    operatorPressed = true;
}

const equalsBtnPress = function () {
    if (activeNumber === undefined || operatorPressed === true) {
        return;
    } else if (activeOperator === 'reset' || activeOperator === undefined) {
        return;
    }else {
        activeNumber = operate(`${activeOperator}`, storedNumber, activeNumber);
    }
    storedNumber = 0;
    activeOperator = 'reset';
    equalPressed = true;
    setDisplay(activeNumber);
}

// checkOperatorPressed is attatched to numberbuttons to make chaining opearations possible wihtout using equal-button first.
const checkOperatorPressed = function () {
    if (operatorPressed === true) {
        if (storedNumber !== 0 && activeNumber !== 0) {
            storedNumber = operate(`${activeOperator}`, storedNumber, activeNumber);
        } else {
            storedNumber = activeNumber;
        }
    activeNumber = 0;
    operatorPressed = false;
    }
}