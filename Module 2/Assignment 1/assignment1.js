let array1 = []
let newArray = []
for (i=1;i<=5;i++){
  number=prompt('Enter a number')
  array1.push(number)
}
for(i=1;i<=5;i++){
  let item = array1.pop()
  newArray.push(item)
}
console.log(newArray.toString())