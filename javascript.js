let tot = 0;
let left = 0;
let right = null;
let op = null;
function evaluate() {
    if (op === '+') {
        tot = left + right;
    } else if (op === '-') {
        tot = left - right;
    } else if (op === '/') {
        tot = left / right;
    } else if (op === '*') {
        tot =  left * right;
    } else if (right === null || op ==='=') {
        tot = left;
    }
    right = null;
    display.innerText = tot.toString();
    
}
const display = document.getElementById('display');
const collection = document.getElementsByClassName("button");
for (let button of collection) {
    button.addEventListener("click", evaluate);
}