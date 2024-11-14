'use strict';
function addition(a,b) {
  return parseInt(a)+parseInt(b);
}
function subtraction(a,b) {
  return parseInt(a)-parseInt(b);
}
function multiplication(a,b) {
  return parseInt(a)*parseInt(b);
}
function division(a,b) {
  if (b==='0') {
    return 'Can not divide by 0';
  }
  return parseInt(a)/parseInt(b);
}
function calculate(evt) {
  let calculation = document.getElementById('calculation').value
  if (calculation.includes('+')){
    result.innerText=addition(calculation.split('+')[0],calculation.split('+')[1])
    console.log(calculation.split('+'))
  } else if (calculation.includes('-')){
    result.innerText=subtraction(calculation.split('-')[0],calculation.split('-')[1])
  } else if (calculation.includes('*')){
    result.innerText=multiplication(calculation.split('*')[0],calculation.split('*')[1])
  } else if (calculation.includes('/')){
    result.innerText=division(calculation.split('/')[0],calculation.split('/')[1])
  }
}
const result = document.getElementById('result')
const button = document.getElementById('start')
button.addEventListener('click',calculate)