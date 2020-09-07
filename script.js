let displayText = document.querySelector("#display-text");
let tempNum = displayText.textContent;
let num1 = displayText.textContent;
let num2 = displayText.textContent;
let buttons = document.querySelectorAll(".key");
let secondOperator = false;

let add = function(a, b){
    return a + b;
}

let subtract = function(a, b){
    return a - b;
}

let multiply = function (a, b){
    return a * b;
}

let divide = function (a, b){
    return a / b;
}


let operate = function(operator, num1, num2){
    let result = operator(num1, num2);
    return result;

}

function updateDisplay(value){
    displayText.textContent += value;
    tempNum = displayText.textContent;
    return 0;
}

function clearDisplay(){
    displayText.textContent = "";
    tempNum = displayText.textContent;
    return 0;
}

//adding functionality to each button
for(i = 0; i< buttons.length; i++)
{
    

    buttons[i].addEventListener("click", function(){
        let actButton = this;
        actButton.classList.add("press");
        setTimeout(function(){
        actButton.classList.remove("press");
        }, 30);
        if(displayText.textContent.length > 9)
        {
            displayText.textContent = displayText.textContent.substring(0,1);
        }
    
        if(this.value === ".")
        {
            if(!displayText.textContent.includes("."))
            {
                updateDisplay(this.value);
            }
        }        
        
        else if(this.value ==="⌫")
         {
             displayText.textContent = displayText.textContent.slice(0, (displayText.textContent.length-1));
             tempNum = displayText.textContent;
             
         }
        else if(this.value === "CE" || this.value === "C")
        {
            clearDisplay();
            num1 = null;
            num2 = null;
            secondOperator = false;
        }
        else if(this.value === "%")
        {
            displayText.textContent = displayText.textContent / 100;
            tempNum = tempNum / 100;
        }
        else if(this.value === "+")
        {
            
            if(secondOperator === true)
            {
            num2 = tempNum;
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            num1 = tempNum;
            
            }
            
            
            num1 = tempNum;
            clearDisplay();
            operator = add;
            secondOperator = true;
            
            
        }
        else if(this.value === "×")
        {
            
            if(secondOperator === true)
            {
            num2 = tempNum;
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            num1 = tempNum;
            
            }
            
            
            num1 = tempNum;
            clearDisplay();
            operator = multiply;
            secondOperator = true;
            

            
            
        }
        
        else if(this.value === "-")
        {
            if(displayText.textContent === "")
            {
                updateDisplay(this.value);
            }
            else{
            
                if(secondOperator === true)
                {
                num2 = tempNum;
                displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
                tempNum = displayText.textContent;
                num1 = tempNum;
                
                }
                
                
                num1 = tempNum;
                clearDisplay();
                operator = subtract;
                secondOperator = true;
            }
        }
        else if(this.value === "÷")
        {
            
            if(secondOperator === true)
            {
            num2 = tempNum;
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            num1 = tempNum;
            
            }
            
            
            num1 = tempNum;
           clearDisplay();
            operator = divide;
            secondOperator = true;
        }
        else if(this.value === "=")
        {
            num2 = tempNum;
            if(operator === divide && num2 === "0"){
                displayText.textContent = "( ͡° ͜ʖ ͡°)";
            }
            else
            {

            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            secondOperator = false;
            }
         
        }
        else
        {
         updateDisplay(this.value);
        }
         
        
    })
   

   
}


 //keyboard functionality
window.addEventListener("keydown", function(e){
    for(let i = 0; i < 10; i++)
    {
        if(e.key == i)
        {
            updateDisplay(e.key);
            return;
        }
        

    }
    if((e.key == "Enter") || (e.key == "="))
        {
            num2 = tempNum;
            if(operator === divide && num2 === "0"){
                displayText.textContent = "( ͡° ͜ʖ ͡°)";
            }
            else
            {
            
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
           
            }
            
        }
        if(e.key == "+")
        {
            if(secondOperator === true)
            {
            num2 = tempNum;
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            num1 = tempNum;
            
            }
            
            
            num1 = tempNum;
            clearDisplay();
            operator = add;
            secondOperator = true;
        }
        if(e.key == "Backspace")
        {
            displayText.textContent = displayText.textContent.slice(0, (displayText.textContent.length-1));
            tempNum = displayText.textContent;
        }
        if(e.key == "-")
        {
            if(displayText.textContent === "")
            {
                updateDisplay(this.value);
            }
            else{
            
                if(secondOperator === true)
                {
                num2 = tempNum;
                displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
                tempNum = displayText.textContent;
                num1 = tempNum;
                
                }
                
                
                num1 = tempNum;
                clearDisplay();
                operator = subtract;
                secondOperator = true;
            }

        }
        if(e.key == "/")
        {
            if(secondOperator === true)
            {
            num2 = tempNum;
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            num1 = tempNum;
            
            }
            
            
            num1 = tempNum;
            clearDisplay();
            operator = divide;
            secondOperator = true;

        }
        if(e.key == "*")
        {
            if(secondOperator === true)
            {
            num2 = tempNum;
            displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
            tempNum = displayText.textContent;
            num1 = tempNum;
            
            }
            
            
            num1 = tempNum;
            clearDisplay();
            operator = multiply;
            secondOperator = true;
        }
        if(e.key == ".")
        {
            if(!displayText.textContent.includes("."))
            {
                updateDisplay(this.value);
            }

        }
        if(e.key == "%")
        {
            displayText.textContent = displayText.textContent / 100;
            tempNum = tempNum / 100;
        }   
        if(e.key =="Delete")
        {
            clearDisplay();
            num1 = null;
            num2 = null;
            secondOperator = false;
        }
})
