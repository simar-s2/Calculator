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
let operation = '';

// Event Listeners
equalsbtn.addEventListener('click', () => evaluate(operation, num1, num2));
deletebtn.addEventListener('click', removeNumber);
clearbtn.addEventListener('click', clearScreen);
pointbtn.addEventListener('click', addPoint);

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
    operation = '';
}

// Selects operation to perform
function addOperation(opp) {
    if(operation !== ''){
        return;
    }
    else {
        // Sets the first operand
        num1 = screen.textContent;
        // Sets the operation
        operation = opp;
        // Clears screen for second operand
        screen.textContent = '';
    }
}

// Evaluates operands
function evaluate(opp, num1, num2) {
    num2 += screen.textContent;
    a = Number(num1);
    b = Number(num2);
    switch (opp) {
        case '+':
            screen.textContent = a + b;
            break;
        case '−':
            screen.textContent = a - b;
            break;
        case '×':
            screen.textContent = a * b;
            break;
        // Adds a case so user cannot divide by 0
        case '÷':
            if(b == 0){
                clearScreen()
                alert('You cannot divide by 0!');
                break;
            }
            screen.textContent = a / b;
            break;
        default:
            break;
    }
    // Resets operation and both operands after evaluating 
    // This allows the user to type in a new operation with the result
    // The result becomes the first operand in that case
    num1 = '';
    num2 = '';
    operation = '';
}

// Adds a decimal point
function addPoint() {
    // If a point already exists on the screen the user cannot add more
    if(screen.textContent.includes('.')){
        return;
    }
    else {
        screen.textContent += '.';
    }
}
