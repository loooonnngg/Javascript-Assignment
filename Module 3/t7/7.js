'use strict';
const image = document.getElementById('target')
const button = document.getElementById(('trigger'))
function imgA(evt){
  image.src='img/picB.jpg'
}
function imgB(evt){
  image.src='img/picA.jpg'
}
button.addEventListener('mouseenter',imgA)
button.addEventListener('mouseleave',imgB)