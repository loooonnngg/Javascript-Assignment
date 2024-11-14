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
const num1 = document.getElementById('num1').value
const num2 = document.getElementById('num2').value
const operation = document.getElementById('operation').value
  switch (operation) {
    case 'add':
      result.innerText=addition(num1, num2)
      break;
    case 'sub':
      result.innerText=subtraction(num1, num2)
      break;
    case 'multi':
      result.innerText=multiplication(num1, num2)
      break;
    case 'div':
      result.innerText=division(num1, num2)
      break;
  }
}
const result = document.getElementById('result')
const button = document.getElementById('start')
button.addEventListener('click',calculate)