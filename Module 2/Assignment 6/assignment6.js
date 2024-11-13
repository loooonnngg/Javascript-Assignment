function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}
let answer=[]
for (;;){
  let diceResult = rollDice()
  if (diceResult===6){
    answer.push(`<li>${diceResult}</li>`)
    break;
  }
  answer.push(`<li>${diceResult}</li>`)
}
document.querySelector('#target').innerHTML = `${answer.join('')}`;