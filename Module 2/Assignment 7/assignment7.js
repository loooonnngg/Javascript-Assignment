function rollDice(sides){
  return Math.floor(Math.random() * sides) + 1;
}
numberOfSides = parseInt(prompt('How many side of dice do you want'))
let answer=[]
for (;;){
  let diceResult = rollDice(numberOfSides)
  if (diceResult===numberOfSides){
    answer.push(`<li>${diceResult}</li>`)
    break;
  }
  answer.push(`<li>${diceResult}</li>`)
}
document.querySelector('#target').innerHTML = `${answer.join('')}`;