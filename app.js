class Calculator {
    constructor(previous_div, current_div) {
        this.previous_div = previous_div;
        this.current_div = current_div;
        this.clear();
    }
    //CE button, clears the view
    clear(){ 
        this.currentCalculation = ""; 
        this.previousCalculation = "";
        this.action = undefined;
    }
    //so it doesn't add or change numbers 
    addNumber(number){ 
        if( number === "." && this.currentCalculation.includes(".")) return
        this.currentCalculation = this.currentCalculation.toString() + number.toString();
    }
    // + - / 
    addAction(action){ 
        if(this.currentCalculation === "") return
        if(this.previousCalculation !== ""){
            this.calculate()
        }
        this.action = action
        this.previousCalculation = this.currentCalculation
        this.currentCalculation = ""
    }
    // = button
    calculate(){ 
        let calculation
        const previous = parseFloat(this.previousCalculation);
        const current = parseFloat(this.currentCalculation);
        if (isNaN(previous) || isNaN(current)) return;
        switch (this.action){
            case "+":
                calculation = previous + current
                break;
            case "-":
                calculation = previous - current
                break;
            case "÷":
                calculation = previous / current
                break;
            case "x":
                calculation = previous * current
                break;
            default:
                return
        }
        this.currentCalculation = calculation;
        this.action = undefined;
        this.previousCalculation = " ";
    }
    
    updateView(){
        this.current_div.innerHTML = this.currentCalculation;
        if(this.action != null) {
            this.previous_div.innerHTML = `${this.previousCalculation} ${this.action}`;
        } else {
            this.previous_div.innerHTML = "";
        }
    }
};


//all buttons
const action_btn = document.querySelectorAll("[data-action]");
const number_btn = document.querySelectorAll("[data-number]");
const ce_btn = document.querySelector("[data-clear-entry]");
const equal_btn = document.querySelector("[data-equal]");
const previous_div = document.querySelector("[data-previous-calculation]");
const current_div = document.querySelector("[data-current-calculation]");

const calculator = new Calculator(previous_div, current_div);


//buttons with assigned actions
action_btn.forEach( button => {
    button.addEventListener('click', ()=>{
        calculator.addAction(button.innerHTML);
        calculator.updateView();
    })
});

number_btn.forEach( button => {
    button.addEventListener('click', ()=>{
        calculator.addNumber(button.innerHTML);
        calculator.updateView();
    })
});

ce_btn.addEventListener('click', ()=>{
        calculator.clear();
        calculator.updateView();
});

equal_btn.addEventListener('click', ()=>{
        calculator.calculate();
        calculator.updateView();
});