let numList = []
for (;;){
  let userInput=parseInt(prompt('enter a number'))
  if (numList.includes(userInput)){
    alert('Number has already been given')
    break;
  }
  else {numList.push(userInput)
  }
}

numList.sort((a, b) => a - b)
console.log(numList.join(', '))