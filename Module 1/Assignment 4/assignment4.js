let name = prompt('Enter you name');
let randomHouse = Math.random();
let house;
if (randomHouse < 0.25) {
  house = 'Gryffindor'
} else if (randomHouse >= 0.25 && randomHouse <0.5){
  house = 'Slytherin'
} else if (randomHouse >= 0.5 && randomHouse < 0.75){
  house = 'Hufflepuff'
} else {
  house = 'Ravenclaw'
}
document.querySelector('#target').innerHTML=`${name}, you are ${house}.`;