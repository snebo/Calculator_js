//imports
const numberBtns = document.querySelectorAll(".numBtn")
const inputBox = document.querySelector(".func")
const operatorBtns = document.querySelectorAll(".oprBtn")

//functions
function add(a,b){return a+b}
function substract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){return a/b}
function setNumber(number){
    inputBox.textContent+= number
}
function setOperator(sym){
    if(sym == "+"){
        inputBox.textContent+= `${sym}`}
    else if(sym == "-"){
        inputBox.textContent+= `${sym}`}
    else if(sym == "x"){
        inputBox.textContent+= `${sym}`}
    else if(sym == "÷"){
        inputBox.textContent+= `${sym}`}
}

// function setOperator(symbol){
//     if(symbol = '*'){return multiply(firstNumber, lastNumber)}
//     else if (symbol = '/'){return divide(firstNumber, lastNumber)}
//     else if (symbol = '+'){return add(firstNumber, lastNumber)}
//     else if (symbol = '-'){return substract(firstNumber, lastNumber)}
// }

let firstNumber, lastNumber, operator;

numberBtns.forEach(numberBtn => numberBtn.addEventListener('click', ()=>{
    setNumber(Number(numberBtn.textContent))
}))
operatorBtns.forEach(operatorbtn => operatorbtn.addEventListener('click',()=>{
    setOperator(operatorbtn.textContent)
}))


