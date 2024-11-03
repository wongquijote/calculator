let tot = 0;
let left = null;
let right = null;
let op = null;
let freshStart = true;
function evaluate() {
    if (right) {
        if (op === '+') {
            tot = left + right;
        } else if (op === '-') {
            tot = left - right;
        } else if (op === '/') {
            tot = left / right;
        } else if (op === '*') {
            tot =  left * right;
        } 
        op = null;
        right = null;
        left = tot;
    } else {
        if (right === 0) {
            alert("don't divide by zero");
        } 
        tot = left;
    }
    freshStart = false;
    display.innerText = tot.toString();
    
}

function clear() {
    tot = 0;
    left = null;
    right = null;
    op = null;
    freshStart = true;
    display.innerText = tot.toString();
}

const clr = document.getElementById('clear');
clr.addEventListener("click", clear);
// behavior is when i have 2 numbers 
// when another op is pressed 
// evaluate the expression
// when another number is pressed
// delete the expression and set tot to 0

const display = document.getElementById('display');
const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.innerText);
    });
});

// const collection = document.getElementsByClassName("op");
// for (let button of collection) {
//     button.addEventListener("click", function() {
//         evalOp(this.innerText);
//     });
// }

// complete the previous operation and 
// store the current operation as long as it is not =
function evalOp(text) {
    if (left !== null) {
        evaluate();
        if (text !== '=') {
            op = text;
        }
    }   
}
// const numbers = document.getElementsByClassName("num");
// for (let num of numbers) {
//     num.addEventListener("click", function() {
//         let val = this.innerText;
//         evalNum(val);
//     });
// }

// not statically typed--use typescript
// val is a string
// update or change either the left or right values
// then update display text
function evalNum(val) {
    if (op !== null) {
        if (right !== null) {
            right = +(right.toString() + val);
        } else {
            right = +val;
        }
        display.innerText = `${left} ${op} ${right}`;
    } else {
        if (freshStart && left !== null) {
            left = +(left.toString() + val);
        } else {
            left = +val;
            freshStart = true;
        }
        display.innerText = `${left}`;
    }
}

function handleInput(value) {
    if (value === 'C') {
        clear();
    } else {
        if (!isNaN(value)) {
            evalNum(value);
        } else {
            evalOp(value);
        }
    }
}

// Keyboard event listener
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'C', 'Enter', '='];
    console.log(key);
    if (validKeys.includes(key)) {
        if (key === 'Enter' || key === '=') {
            handleInput('=');
        } else {
            handleInput(key);
        }
    }
});