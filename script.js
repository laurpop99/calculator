let displayText = document.querySelector("#display-text");
let tempNum = displayText.textContent;
let num1 = displayText.textContent;
let num2 = displayText.textContent;
let buttons = document.querySelectorAll(".key");
let secondOperator = false;


window.addEventListener('keydown', function(e){


        if(e.keyCode == "8")
        {
            displayText.textContent = displayText.textContent.slice(0, (displayText.textContent.length-1));
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "48" || e.keyCode == "45")
        {
            displayText.textContent += "0";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "49" || e.keyCode == "35")
        {
            displayText.textContent += "1";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "50" || e.keyCode == "40")
        {
            displayText.textContent += "2";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "51" || e.keyCode == "34")
        {
            displayText.textContent += "3";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "52" || e.keyCode == "37")
        {
            displayText.textContent += "4";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "53" || e.keyCode == "12")
        {
            displayText.textContent += "5";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "54" || e.keyCode == "39")
        {
            displayText.textContent += "6";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "55" || e.keyCode == "36")
        {
            displayText.textContent += "7";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "56" || e.keyCode == "38")
        {
            displayText.textContent += "8";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "57" || e.keyCode == "33")
        {
            displayText.textContent += "9";
            tempNum = displayText.textContent;
        }
        else if(e.keyCode == "189" || e.keyCode == "109")
        {
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = subtract;
            
        }
        else if(e.keyCode == "13")
        {
            num2 = tempNum;
            if(operator === divide && num2 === "0"){
                displayText.textContent = "( ͡° ͜ʖ ͡°)";
            }
            else
            {

            displayText.textContent = operate(operator, Number(num1), Number(num2));
            tempNum = displayText.textContent;
            }
        }
      
        else if(e.keyCode == "187" || e.keyCode == "107")
        {
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = add;
        }

        else if(e.keyCode == "56" || e.keyCode == "106")
        {
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = multiply;
        }

        else if(e.keyCode == "191" || e.keyCode == "111")
        {
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = divide;
        }
        else if(e.keyCode == "190" || e.keyCode == "46")
        {
            if(!displayText.textContent.includes("."))
            {
            displayText.textContent += ".";
            tempNum = displayText.textContent;
            }
        }


        



})

for(i = 0; i< buttons.length; i++)
{
    

    buttons[i].addEventListener("click", function(){
        
       
        if(this.value === ".")
        {
            if(!displayText.textContent.includes("."))
            {
            displayText.textContent += ".";
            tempNum = displayText.textContent;
            }
        }        
        
        else if(this.value ==="⌫")
         {
             displayText.textContent = displayText.textContent.slice(0, (displayText.textContent.length-1));
             tempNum = displayText.textContent;
         }
        else if(this.value === "CE" || this.value === "C")
        {
            displayText.textContent = "";
            tempNum = displayText.textContent;
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
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = "";
            operator = add;
            
        }
        else if(this.value === "×")
        {
            
            if(secondOperator === false)
            {
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = multiply;
            }
           
            

            if(secondOperator === true)
            {
                num2 = tempNum;
                displayText.textContent = Math.round(operate(operator, Number(num1), Number(num2)) * 10000)/10000;
                tempNum = displayText.textContent;
                num1 = tempNum;
                num2 = null;
                
                
            }
            secondOperator = true;
            

            
            
        }
        
        else if(this.value === "-")
        {
            if(displayText.textContent === "")
            {
                displayText.textContent ="-";
                tempNum = displayText.textContent;
            }
            else{
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = subtract;
            }
        }
        else if(this.value === "÷")
        {
            displayText.textContent = "";
            num1 = tempNum;
            tempNum = ""
            operator = divide;
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
         displayText.textContent += this.value;
         tempNum = displayText.textContent;
        }
         
        
    })

}



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


