'use strict';
const names = ['John', 'Paul', 'Jones'];
let ul=document.getElementById('target')
for (let i=0;i<=2;i++){
  let li = document.createElement('li')
  li.innerText=names[i]
  ul.appendChild(li)
}