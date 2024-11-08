let arr; 

function makeArr(){
    let info = document.getElementById('fileInput').value;
    let arrTemp = info.split("\n");
    let arrNum = [];
    for (let i = 0; i < arrTemp.length; i++){
        arrNum.push(parseFloat(arrTemp[i]));
    }
    arr = arrNum.sort(function(a, b) {
        return a - b;
      });
      document.getElementById("output").innerHTML = arr;
}

function mean(){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    document.getElementById("output").innerHTML = total/arr.length;
}

function median(){
    let med;
    if (arr.length%2 == 0){
        med = (arr[arr.length/2-1]+arr[(arr.length/2)])/2
    } else {
        med = arr[arr.length/2-0.5];
    }
    document.getElementById("output").innerHTML = med;
}

function mode() {
    let frequency = {};
    let maxCount = 0;
    let modeValue = null;

    // Count the frequency of each number  
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1; // Increment count  
    }

    // Find the number with the highest frequency  
    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            modeValue = num; // Set mode value  
        }
    }

    // Output the mode  
    document.getElementById("output").innerHTML = `Mode: ${modeValue} (Count: ${maxCount})`;
}

function max(){
    let top = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(top < arr[i]){
            top = arr[i];
        }
    }
    document.getElementById("output").innerHTML = top;
}

function min(){
    let bottom = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(bottom > arr[i]){
            bottom = arr[i];
        }
    }
    document.getElementById("output").innerHTML = bottom; 
}