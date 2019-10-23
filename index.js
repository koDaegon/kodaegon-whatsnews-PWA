const API_KEY = '38d6768849d54adcb26773faeb4f034c';

// if('serviceWorker' in navigator) {
//     window.addEventListener('load' , () => {
//         navigator.serviceWorker.register('/sw.js')
//         .then(reg => console.log('Service worker has been registered successfully') )
//     })
// }
// let deferredPrompt;

// window.addEventListener('beforeinstallpropmt' , (event)=> {
//     deferredPrompt = event;
// })


//get the data
function getNews () {
    fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`)
    .then( response => response.json())
    .then( results => renderNews(results.articles) )    
}
//passing object in argument for good practice
function renderCard (title , imgLink , date) {
    return `
        <div class ='card'>
            <img src=${imgLink} alt="" class="card-img-top">
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
        cols.innerHTML += renderCard(article.title, article.urlToImage, article.publishedAt)
      })
}

window.addEventListener('DOMContentLoaded' , () => {
    getNews();
});