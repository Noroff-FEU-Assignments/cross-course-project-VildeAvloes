import { url } from "./components/constants.js";
const filmResultsContainer = document.querySelector(".film-results");

async function getFilms() {
  try {
    const response = await fetch(url);
    const filmResults = await response.json();

    console.log(filmResults);

    filmResultsContainer.innerHTML = "";

    filmResults.forEach(function (film) {
      filmResultsContainer.innerHTML += `<div class="card-wrapper">
                                            <a href="film-preview.html?id=${film.id}" class="card">
                                            <img src="${film.images[0].src}" 
                                            alt="${film.images[0].alt}" class="preview-image" />${film.name}</a>
                                          </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getFilms();
