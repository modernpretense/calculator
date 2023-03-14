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
let activeNumber = 0;
let operatorPressed = false; // Flag to see if an operator-button has been pressed. Is cleared by next nummeral input.
let equalPressed = false;
let activeOperator; // 'add, 'subtract', 'multiply', 'divide', 'reset'
let storedOperator;
let activeComma = false;
let isCommaUsed = false;

// Buttons

const numBtnPress = function (btnNumber) {
    checkOperatorPressed();
    let aNumLength = activeNumber.toString().length;
    if (activeNumber === undefined || activeNumber === 0 || equalPressed === true) {
        activeNumber = Number(`${btnNumber}`);
        equalPressed = false;
    } else if (aNumLength < 10) {
        checkInsertComma();
        activeNumber = Number(`${activeNumber}${btnNumber}`);
    }
    setDisplay(activeNumber);
}

const cBtnPress = function () {
    activeNumber = storedNumber;
    storedNumber = 0;
    activeOperator = 'reset';
    operatorPressed = false;
    activeComma = false;
    isCommaUsed = false;
    removeMarkOperator();
    setDisplay(activeNumber);
}

const acBtnPress = function () {
    activeNumber = 0;
    storedNumber = 0;
    activeOperator = 'reset';
    storedOperator = 'reset';
    operatorPressed = false;
    equalPressed = false;
    activeComma = false;
    isCommaUsed = false;
    removeMarkOperator();
    setDisplay(activeNumber);
}

const setActiveOperator = function (operatorInput) {
    storedOperator = activeOperator;
    activeOperator = operatorInput;
    operatorPressed = true;
    isCommaUsed = false;
    markOperator(operatorInput);
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
    removeMarkOperator();
    equalPressed = true;
    isCommaUsed = false;
    setDisplay(activeNumberOutput(activeNumber));
}

// checkOperatorPressed is attatched to numberbuttons to make chaining opearations possible wihtout using equal-button first.
const checkOperatorPressed = function () {
    if (operatorPressed === true) {
        if (storedNumber !== 0 && activeNumber !== 0) {
            storedNumber = operate(`${storedOperator}`, storedNumber, activeNumber);
        } else {
            storedNumber = activeNumber;
        }
    activeNumber = 0;
    operatorPressed = false;
    }
}

const commaBtnPress = function () {
    if (activeNumber !== 0) {
    activeComma = true;
    setDisplay(`${activeNumber}.`)
    }
}

const checkInsertComma = function () {
    if (activeComma === true && isCommaUsed === false) {
        activeNumber = `${activeNumber}.`;
        activeComma = false;
        isCommaUsed = true;
    }
}

// Event listener to show if operator is active


const markOperator = function (operator) {
    removeMarkOperator();
    const element = document.getElementById(`${operator}`);
    element.classList.add("markedbtn");
}

const removeMarkOperator = function () {
    const operatorButtons = document.querySelectorAll('.operatorbtn');
    operatorButtons.forEach((button) => {
        button.classList.remove('markedbtn');
    });
}

const activeNumberOutput = function (inputnumber) {
    let number = Number(inputnumber.toFixed(2));
    let numberLength = number.toString().length;
    
    if (isFinite(number) === false) {
        return 'delt paa 0';
    } else if (numberLength <= 10) {
        return number;
    } else {
        return number.toExponential(2);
    }


}