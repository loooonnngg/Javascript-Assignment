let answer;
let confirmation = confirm('Should I calculate the square root?')
if (confirmation){
  let num=prompt('Enter your number')
  if (num<0){
    answer='The square root of a negative number is not defined'
  } else {
    answer = `The square root of your number is ${Math.sqrt(num)}`
  }
} else {
  answer = 'The square root is not calculated.'
}
document.querySelector('#target').innerHTML = answer;