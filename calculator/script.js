function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    //rounding to prevent overflow in display
    return Math.round((a*b)*1000)/1000;
}

function divide(a,b){
    //rounding to prevent overflow in display
    return Math.round((a/b)*1000)/1000;
}

function operate(a,b,op){
    //op is operator
    //a, b are numbers
}

function changeDisplay(str){
    displayDiv.textContent = str;
}

function pressNumBtn(num_str){
    if(display_op===null){
        //this is the 1st num before op
        if(display_num === 0){
            display_num = +num_str;
            changeDisplay(display_num);
        }else{
            display_num = +(""+display_num+num_str);
            changeDisplay(display_num);
        }
    }
    else{
        //this is the 2nd num after op
        if(display_num2 === null){
            display_num2 = +num_str;
            
        }else{
            display_num2 = +(""+display_num2+num_str);
            
        }
        changeDisplay(""+ display_num + " " + display_op +" "+display_num2);
    }

}

function pressOpBtn(op_str){
    if(display_num2 !== null){
        //once 2nd number typed in, first compute before changing operator
        operate();
    }
    if(op_str === "÷"){
        display_op = "÷";
    }
    else if (op_str === "X"){
        display_op = "X";
    }
    else if (op_str === "–"){
        display_op = "–";
    }
    else if (op_str === "+"){
        display_op = "+";
    }
    changeDisplay(display_num + " " + display_op);

}

function clearDisplay(){
    displayDiv.textContent = 0;
    display_num = 0;
    display_num2 = null;
    display_op = null;
}

function operate(){
    if(display_op === null){
        alert("Please select an operator");
        return;
    }
    else if(display_num2 === null){
        alert("Please enter a number");
        return;
    }
    let output = 0;
    if(display_op === "÷"){
        if(display_num2===0){
            alert("dividing by 0 is not allowed");
            //revert changes
            changeDisplay(display_num);
            display_num2 = null;
            display_op = null;
            return;
        }
        output = divide(display_num,display_num2);
    }
    else if (display_op === "X"){
        output = multiply(display_num,display_num2);
    }
    else if (display_op === "–"){
        output = subtract(display_num,display_num2);
    }
    else if (display_op === "+"){
        output = add(display_num,display_num2);
    }
    changeDisplay(output);
    display_num = output;
    display_num2 = null;
    display_op = null;
}

//display log to track what numbers is pressed
let display_num = 0;
let display_num2 = null;
let display_op = null;
const displayDiv = document.querySelector(".top_screen");

//number
let btn_num = Array.from(document.querySelectorAll(".number"));;

for(let i = 0;i<btn_num.length;i++){
    let current_btn = btn_num[i]
    current_btn.addEventListener("click", ()=>{pressNumBtn(current_btn.textContent);});
}

//op
let btn_op = Array.from(document.querySelectorAll(".op"));;

for(let i = 0;i<btn_op.length;i++){
    let current_btn2 = btn_op[i]
    current_btn2.addEventListener("click", ()=>{pressOpBtn(current_btn2.textContent);});
}

//clear button
const clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click",clearDisplay);

//equal button
const equal_btn = document.querySelector(".equal");
equal_btn.addEventListener("click",operate);
