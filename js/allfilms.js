import { url } from "./components/constants.js";
const filmResultsContainer = document.querySelector(".film-results");

async function getFilms() {
  try {
    const response = await fetch(url);
    const filmResults = await response.json();

    filmResultsContainer.innerHTML = "";

    filmResults.forEach(function (film) {
      filmResultsContainer.innerHTML += `<div class="card-wrapper">
                                            <a href="film-preview.html?id=${film.id}" class="card">
                                            <img src="${film.images[0].src}" 
                                            alt="${film.images[0].alt}" class="preview-image" />${film.name}</a>
                                          </div>`;
    });
  } catch (error) {
    filmResultsContainer.innerHTML = `<div class="container"> ${displayMessage(
      "error",
      "Oh no, couldn't fetch films.."
    )}</div>`;
  }
}

getFilms();
