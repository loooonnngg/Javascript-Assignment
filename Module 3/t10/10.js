'use strict';
const form = document.querySelector('#source')
function getName(evt) {
  const output = document.getElementById('target')
  const firstname = form[name = 'firstname'].value
  const lastname = form[name = 'lastname'].value
  evt.preventDefault();
  output.innerText=`Your name is ${firstname} ${lastname}`
}
form.addEventListener('submit',getName)