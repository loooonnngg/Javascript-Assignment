let dogList=[]
for(let i=0;i<6;i++){
  dogList.push(`<li>${prompt('Enter the dog\'s name')}</li>`)
}
dogList.sort();dogList.reverse()
console.log(dogList)
document.querySelector('#target').innerHTML = `<ul>${dogList.join('')}</ul>`;