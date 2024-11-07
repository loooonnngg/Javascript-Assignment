let year = parseInt(prompt('enter a year'));
let answer;
if (year%100===0 && year%400===0 || year%4===0){
  console.log('testtest')
  answer = 'Your year is a leap year'
} else {
  answer = 'Your year is not a leap year'
}
document.querySelector('#target').innerHTML = answer;