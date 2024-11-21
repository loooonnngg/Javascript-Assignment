'use strict';
async function getShow(evt){
  evt.preventDefault()
  const data=document.getElementById('query').value;
  try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
        const shows = await response.json();
        const result = document.getElementById('results')
        console.log(typeof shows)
        console.log(shows)
  for (let show of shows){
    let article=document.createElement('article');article.innerHTML=''
    let name=document.createElement('h2')
    let link=document.createElement('a')
    let image=document.createElement('img')
    let summary=document.createElement('div')
    let lineBreak = document.createElement('br')
    name.innerText=show.show.name
    link.innerText=show.show.url
    link.target='_blank'
    show.show.image ? image.src=show.show.image.medium : image.src='https://via.placeholder.com/210x295?text=Not%20Found'
    image.alt=show.show.name
    summary.innerHTML=show.show.summary
    article.appendChild(name);article.appendChild(link);article.appendChild(lineBreak);article.appendChild(image);article.appendChild(summary)
    result.appendChild(article)
  }
    } catch (error) {
    console.log(error.message);
  }
}
document.addEventListener('submit', getShow)