let numberList=[]
let output = 'You haven\'t enter any number'
for(;;){
  let userInput = parseInt(prompt('Enter a number'))
  if (userInput ===0){
    break;
  }
  numberList.push(userInput)
}
numberList.sort((a, b) => a - b).reverse()
if(numberList.length!==0){
  output=numberList
}
console.log(numberList.join(', '))