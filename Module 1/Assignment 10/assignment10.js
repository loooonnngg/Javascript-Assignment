let numOfDice = parseInt(prompt('Enter how many dice you want to roll'))
let userSum = parseInt(prompt('Enter the sum you want'))
let targetAmount = 0
function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}
let sum=0;
for (let i=1;i<=100000;i++) {
  for (let dice = 1; dice <= numOfDice; dice++) {
    sum += rollDice()
  }
  if (sum===userSum){
    targetAmount++
  }
  sum = 0
}
let probability = (targetAmount/1000).toFixed(2)
document.querySelector('#target').innerHTML = `The probability to roll that sum is ${probability}%`;