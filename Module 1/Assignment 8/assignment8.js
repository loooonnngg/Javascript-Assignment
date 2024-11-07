let startYear= parseInt(prompt('Enter the start year'))
let endYear = parseInt(prompt('Enter the end year'))
while(startYear%100!==0 && startYear%400!==0||startYear%4!==0){
  startYear++
}
let yearList=`<li>${startYear}</li>`;
for(let year=startYear+4;year<=endYear;year+=4){
  yearList+=`<li>${year}</li>`
}
document.querySelector('#target').innerHTML = `<ul>${yearList}</ul>`;