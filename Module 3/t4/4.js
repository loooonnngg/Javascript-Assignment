'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
let select = document.getElementById('target')
for (let i=0;i<=2;i++){
  let option = document.createElement('option')
  option.value= students[i]['id']
  option.innerText=students[i]['name']
  select.appendChild(option)
}