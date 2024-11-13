function concat(strArray){
  let finalStr = strArray[0]
  for(let i=1;i<strArray.length;i++){
    finalStr+=strArray[i]
  }
  return finalStr;
}
document.querySelector('#target').innerHTML = concat(['Johnny','DeeDee','Joey','Marky']);