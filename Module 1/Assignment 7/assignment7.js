let amount = prompt('How many time should i roll the dice')
function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}
let sum=0;
for (let i=1;i<=amount;i++){
  sum+=rollDice()
}
document.querySelector('#target').innerHTML = `The sum of the dices you have rolled are ${sum}`;