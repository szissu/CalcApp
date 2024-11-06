function add(){
    let num1 = parseFloat(document.getElementById("q1").value);
    let num2 = parseFloat(document.getElementById("q2").value);
    let result = num1 + num2;
    document.getElementById("output").innerHTML =  result;
}

function subtract(){
    let num1 = parseFloat(document.getElementById("q1").value);
    let num2 = parseFloat(document.getElementById("q2").value);
    let result = num1 - num2;
    document.getElementById("output").innerHTML =  result;
}

function multiply(){
    let num1 = parseFloat(document.getElementById("q1").value);
    let num2 = parseFloat(document.getElementById("q2").value);
    let result = num1 * num2;
    document.getElementById("output").innerHTML =  result;
}

function divide(){
    let num1 = parseFloat(document.getElementById("q1").value);
    let num2 = parseFloat(document.getElementById("q2").value);
    let result = num1 / num2;
    document.getElementById("output").innerHTML =  result;
}

function pow(){
    let num1 = parseFloat(document.getElementById("q1").value);
    let num2 = parseFloat(document.getElementById("q2").value);
    let result = Math.pow(num1, num2);
    document.getElementById("output").innerHTML =  result;
}

function mod(){
    let num1 = parseFloat(document.getElementById("q1").value);
    let num2 = parseFloat(document.getElementById("q2").value);
    let result = num1 % num2;
    document.getElementById("output").innerHTML =  result;
}

function pi(num){    
    let input;
    switch(num){
        case 1: input = 'q1';
        break;
        case 2: input = 'q2';
        break;
    }
    var text = document.getElementById(input);
    text.value = parseFloat(text.value) + Math.PI;
}

function round(){
    var text = parseFloat(document.getElementById('output').innerHTML);
    let result = Math.round(text);
    document.getElementById("output").innerHTML =  result;
}
