// selecting DOM elements
const numberbtns = document.querySelectorAll('.number');
const operationbtns = document.querySelectorAll('.operation')
const clearbtn = document.getElementById('clearbtn');
const deletebtn = document.getElementById('deletebtn');
const screen = document.querySelector('.screen');

numberbtns.forEach((btn) =>
    btn.addEventListener('click', () => appendNumber(btn.textContent))
)

function appendNumber(number) {
    screen.textContent += number;
}
