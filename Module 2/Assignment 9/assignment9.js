function even(numArray){
  newArray=[]
  for (let i = 0;i<numArray.length;i++){
    if(numArray[i]%2===0){
      newArray.push(numArray[i])
    }
  }
  return newArray;
}
array1=[1,2,3,5]
array2=even(array1)
console.log(array1)
console.log(array2)