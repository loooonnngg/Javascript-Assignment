async function joke(evt){
  evt.preventDefault()
  const data=document.getElementById('query').value;
  try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${data}`);
        const jokes = await response.json();
        const body=document.getElementsByTagName('body')[0]
        for (let joke of jokes.result){
          const content=document.createElement('p')
          const article=document.createElement('article')
          content.innerHTML=''
          article.innerHTML=''
          content.innerText=joke.value
          article.appendChild(content)
          body.appendChild((article))
        }
    } catch (error) {
    console.log(error.message);
  }
}
document.addEventListener('submit',joke)