//imports
const numberBtns = document.querySelectorAll(".numBtn")
const inputBox = document.querySelector(".func")
const operatorBtns = document.querySelectorAll(".oprBtn")
const ctrlButtons = document.querySelectorAll(".ctrlBtn")
const result = document.querySelector(".result")

let operatorSym = ""
let newOperation = false

//functions
function setNumber(number){
    inputBox.textContent+= number
}
function calculate(a, sym, b){
    if (sym=="+")return Number(a)+Number(b)
    else if (sym=="x")return a*b
    else if (sym=="-")return a-b
    else if (sym=="÷")return a/b
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
    
    operatorSym = sym

}
function clear(){
    inputBox.textContent= ""
    result.textContent=""
    newOperation = false
}
function funcControl(action){

    a = Number(inputBox.textContent)
    if (action == "C"){
        clear()
    }
    else if (action == "del"){
        inputBox.textContent = inputBox.textContent.slice(0,-1)
    }
    else if (action == "√"){
        result.textContent = Math.sqrt(a)
        inputBox.textContent = `√${a}`
        newOperation = true
    }
    else if(action == "="){
        let func = inputBox.textContent.split(operatorSym)
        let solution = calculate(func[0], operatorSym, func[1])
        result.textContent = solution
        newOperation = true
    }
}

clear()
//events
numberBtns.forEach(numberBtn => numberBtn.addEventListener('click', ()=>{
    if (newOperation){clear()}
    setNumber(numberBtn.textContent)
}))
operatorBtns.forEach(operatorbtn => operatorbtn.addEventListener('click',()=>{
    setOperator(operatorbtn.textContent)
}))
ctrlButtons.forEach(ctrlBtn => ctrlBtn.addEventListener("click", ()=>{
     funcControl(ctrlBtn.textContent)
}))