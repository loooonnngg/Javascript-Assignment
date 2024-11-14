const button = document.querySelector('body button')
function buttonClicked(evt){
  alert('Button Clicked')
}
button.addEventListener('click',buttonClicked)