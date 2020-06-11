const API_KEY = 'PRIVATE_KEY';

//Resgistering ServiceWork 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
          .then((reg) => console.log('Service worker registered.', reg));
    });
  }

//Add Install button
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  deferredPrompt = event;
});

const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', () => deferredPrompt.prompt());


//get the data
function getNews () {
    fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`)
    .then( response => response.json())
    .then( results => renderNews(results.articles) )    
}
//passing object in argument for good practice
function renderCard (title , imgLink , date , urlLink) {
    return `
        <div class ='card'>
        <a href="${urlLink}"><img src=${imgLink} alt="" class="card-img-top"></a>
            <div class="card-body">
            <h5 class="card-title">${title}</h5>   
                <p class= "card-text> <small class= "text-muted">${date}</small></p>
             </div>
        </div>
    `
}

function renderNews(news) {
    const cols = document.getElementById('cardContainer');

    news.map(article => {
        if(article.urlToImage !== null) {
            return cols.innerHTML += renderCard(article.title, article.urlToImage, article.publishedAt , article.url);
        }
    })
}

window.addEventListener('DOMContentLoaded' , () => {
    getNews();
});
