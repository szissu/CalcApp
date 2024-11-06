function makeArr(){
    let info = document.getElementById('fileInput').innerHTML;

    let infoArr = info.split("\n");
    for(let i = 0; i < infoArr.length; i++){
        document.getElementById("output").innerHTML +=  infoArr[i];
    }
}

function mean(){
    let arr = [1, 2, 3];
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    document.getElementById("output").innerHTML = total/arr.length;
}

function median(){
    let arr = [1, 2, 3];
    let med;
    if (arr.length%2 == 0){
        med = (arr[arr.length/2-1]+arr[(arr.length/2)])/2
    } else {
        med = arr[arr.length/2-0.5];
    }
    document.getElementById("output").innerHTML = med;
}

function mode(){
    list = [1,2,3,4,5,6,7,7]
    var empty = []
    i = 0
    max = 0
    while (i<list.length){
    
       if (list[i]==list[i+1]){
           empty = list[i] 
       i += 1
        }else{
          i +=1
          }
    
     }
}

function max(){
    let arr = [1, 2, 3];
    let top = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(top < arr[i]){
            top = arr[i];
        }
    }
    document.getElementById("output").innerHTML = top;
}

function min(){
    let arr = [1, 2, 3];
    let bottom = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(bottom > arr[i]){
            bottom = arr[i];
        }
    }
    document.getElementById("output").innerHTML = bottom; 
}
