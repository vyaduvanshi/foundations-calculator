function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

let var1 = null;
let op = null;
let var2 = '';

function operate(var1, op, var2){
    var1 = Number(var1);
    var2 = Number(var2);
    if (op === '+')
        return add(var1, var2);
    else if (op === '-')
        return subtract(var1, var2);
    else if (op === '*')
        return multiply(var1, var2);
    else if (op === '/')
        return divide(var1, var2);
}

const result = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
numbers.forEach((x) => {
    x.addEventListener('click', () => {
        result.textContent += x.textContent;
        if (op === null)
            var1 = result.textContent;
        else
            var2 += x.textContent;

        if (result.textContent.indexOf('.') !== -1)
            document.querySelector('.decimal').disabled = true;
        else
            document.querySelector('.decimal').disabled = false;
        
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((x) => {
    x.addEventListener('click', () => {
        if (op !== null){
            result.textContent = operate(var1, op, var2)
            var1 = result.textContent
            return
        }
        result.textContent += x.textContent;
        op = x.textContent;
        var2 = '';
    });
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (!var1 || !op || !var2)
        return
    let res = operate(var1, op, var2);
    var1 = res;
    result.textContent = res;
})




const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    result.textContent = result.textContent.slice(0,-1);
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    result.textContent = '';
    var1 = '';
    op = null;
    var2 = '';
    document.querySelector('.decimal').disabled = false;
})