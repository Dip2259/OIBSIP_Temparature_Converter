let tempval = document.getElementsByClassName('tempval')[0];
let options = document.getElementsByClassName('options')[0];
let res1l = document.querySelector('.res1 label');
let res2l = document.querySelector('.res2 label');
let res1 = document.querySelector('.res1 input');
let res2 = document.querySelector('.res2 input');
let convert = document.getElementsByClassName('convert')[0];
let clear = document.getElementsByClassName('clear')[0];
let overlap = document.getElementsByClassName('overlap')[0];

function calculateTemp(temp, type){
    if(type == 'Celcius'){
        res1.value = ((temp * 9/5) + 32).toFixed(2);
        res2.value = (temp + 273.15).toFixed(2);
    }
    else if(type == 'Fahrenheit'){
        res1.value = ((temp - 32) * 5/9).toFixed(2);
        res2.value = ((temp - 32) * 5/9 + 273.15).toFixed(2);
    }
    else{
        res1.value = (temp - 273.15).toFixed(2);
        res2.value = ((temp - 273.15) * 9/5 + 32).toFixed(2);
    }
}
function validate(){
    let regex = /^(\-\d)?[0-9]*(\.\d)?([0-9]*)?$/;
    if((tempval.value).match(regex) && tempval.value != ""){
        return true;
    }
    return false;
}
options.addEventListener('change',()=>{
    if(options.value == 'Celcius'){
        res1l.innerHTML = "Fahrenheit";
        res2l.innerHTML = "Kelvin";
        if(validate()){
            calculateTemp(parseFloat(tempval.value),options.value);
        }
    }
    else if(options.value == 'Fahrenheit'){
        res1l.innerHTML = "Celcius";
        res2l.innerHTML = "Kelvin";
        if(validate()){
            calculateTemp(parseFloat(tempval.value),options.value);
        }
    }
    else{
        res1l.innerHTML = "Celcius";
        res2l.innerHTML = "Fahrenheit";
        if(validate()){
            calculateTemp(parseFloat(tempval.value),options.value);
        }
    }
})
convert.addEventListener('click',()=>{
    if(validate()){
        calculateTemp(parseFloat(tempval.value),options.value);
    }
    else{
        overlap.classList.add('active');
        setTimeout(() => {
            overlap.classList.remove('active');
        }, 2500);
    }
})
clear.addEventListener('click',()=>{
    res1.value = ""; 
    res2.value = ""; 
    tempval.value = ""; 
})