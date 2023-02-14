const url = 'https://vilde-avlos.no/square-eyes/wp-json/wc/store/products';
const filmResultsContainer = document.querySelector(".film-results");

async function getFilms(){
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
        console.log(getResults);
    }
    catch(error){
        console.log(error)
    }
}

getFilms();

function createHTML(films){
    films.forEach(function(product){
        filmResultsContainer.innerHTML +=   
        `<div class="card-wrapper">
        <a href="film-preview.html" class="card">
        <img src="${product.images[0].src}" 
        alt="${product.images[0].alt}" class="preview-image" />${product.name}</a>
      </div>`
    })
}