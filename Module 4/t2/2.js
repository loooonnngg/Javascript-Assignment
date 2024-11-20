'use strict';
async function getShow(evt){
  evt.preventDefault()
  const data=document.getElementById('query').value;
  try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
    console.log(error.message);
  }
}
document.addEventListener('submit', getShow)