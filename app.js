// selecting DOM elements
const numberbtns = document.querySelectorAll('.number');
const operationbtns = document.querySelectorAll('.operation')
const clearbtn = document.getElementById('clear');
const deletebtn = document.getElementById('delete');
const screen = document.querySelector('.screen');

numberbtns.forEach((btn) =>
    btn.addEventListener('click', () => appendNumber(btn.textContent))
)

deletebtn.addEventListener('click', removeNumber);
clearbtn.addEventListener('click', clearScreen);

function appendNumber(number) {
    screen.textContent += number;
}

function removeNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
}

function clearScreen () {
    screen.textContent = '';
}