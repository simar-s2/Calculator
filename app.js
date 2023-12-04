// selecting DOM elements
const numberbtns = document.querySelectorAll('.number');
const operationbtns = document.querySelectorAll('.operation')
const clearbtn = document.getElementById('clear');
const deletebtn = document.getElementById('delete');
const screen = document.getElementById('screen');
const equalsbtn = document.getElementById('equals');
const pointbtn = document.getElementById('point');

let num1 = '';
let num2 = '';
let operand = '';

// Event Listeners
equalsbtn.addEventListener('click', () => evaluate(operand, num1, num2));
deletebtn.addEventListener('click', removeNumber);
clearbtn.addEventListener('click', clearScreen);
// pointbtn.addEventListener('click', addPoint);

numberbtns.forEach((btn) =>
    btn.addEventListener('click', () => appendNumber(btn.textContent))
)

operationbtns.forEach((btn) => 
    btn.addEventListener('click', () => addOperation(btn.textContent))
)

// Adds number to the screen
function appendNumber(number) {
    screen.textContent += number;
}

// Removes a number from the screen
function removeNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
}

// Clears Screen
function clearScreen () {
    screen.textContent = '';
    num1 = '';
    num2 = '';
    operand = '';
}

// Selects operation to perform
function addOperation(operation) {
    if(operand !== ''){
        return;
    }
    else {
        num1 = screen.textContent;
        screen.textContent += operation;
        operand = operation;
        screen.textContent = '';
    }
}

function evaluate(operand, num1, num2) {
    num2 += screen.textContent;
    switch (operand) {
        case '+':
            screen.textContent = num1 + num2;
            break;
        case '−':
            screen.textContent = num1 - num2;
            break;
        case '×':
            screen.textContent = num1 * num2;
            break;
        case '÷':
            screen.textContent = num1 / num2;
        default:
            break;
    }
}

// Adds a decimal point
// If there is already one point the user cannot add one more
// function addPoint() {
//     if(screen.textContent.includes('.')){
//         return;
//     }
//     else {
//         screen.textContent += '.';
//     }
// }
