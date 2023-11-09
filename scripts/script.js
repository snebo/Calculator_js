//imports


//functions
function add(a,b){return a+b}
function substract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){return a/b}

function setOperator(symbol){
    if(symbol = '*'){return multiply(firstNumber, lastNumber)}
    else if (symbol = '/'){return divide(firstNumber, lastNumber)}
    else if (symbol = '+'){return add(firstNumber, lastNumber)}
    else if (symbol = '-'){return substract(firstNumber, lastNumber)}
}

let firstNumber, lastNumber, operator;
