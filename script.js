let input = document.getElementById('input');
let temp = 1;
function calculer(value){
    
    input.value += value;
}

function DEL(){
    input.value = '';
}

function Cal(){
    res = eval(input.value);
    input.value = res;
}

function del1(){
    input.value = input.value.slice(0,-1)
}