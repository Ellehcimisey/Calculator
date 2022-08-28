class Calculator {
    constructor(previous_div, current_div) {
        this.previous_div = previous_div;
        this.current_div = current_div;
        this.clear();
    }
    //CE button, clears the view
    clear(){ 
        this.previousCalculation = "";
        this.currentCalculation = "";
        this.action = undefined;
    }
    //so it doesn't add or change numbers 
    addNumber(number){ 
        if( number === "." && this.currentCalculation.includes(".")) return;
        this.currentCalculation = this.currentCalculation.toString() + number.toString();
    }
    // + - / 
    addAction(action){ 
        this.action = action;
        this.previousCalculation = this.currentCalculation;
        this.currentCalculation = "";
    }
    // = button
    calculate(){ 

    }
    updateView(){
        this.current_div.innerHTML = this.currentCalculation;
    }

};


//all buttons
const action_btn = document.querySelectorAll("[data-acton]");
const number_btn = document.querySelectorAll("[data-number]");
const ce_btn = document.querySelector("[data-clear-entry]");
const equal_btn = document.querySelector("[data-equal]");
const previous_div = document.querySelector("[data-previous-calculation]");
const current_div = document.querySelector("[data-current-calculation]");

const calculator = new Calculator(previous_div, current_div);


//buttons with assigned actions
action_btn.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.addAction(button.innerHTML);
        calculator.updateView();
    })
});

number_btn.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.addNumber(button.innerHTML);
        calculator.updateView();
    })
});

ce_btn.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.clear();
        calculator.updateView();
    })
});

equal_btn.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.calculate();
        calculator.updateView();
    })
});