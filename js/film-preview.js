import { url } from "./components/constants.js";
import { displayMessage } from "./components/message.js";

const detailsContainer = document.querySelector(".film-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const detailsUrl = url + id;

console.log(detailsUrl);

async function getFilmDetails() {
  try {
    const response = await fetch(detailsUrl);
    const details = await response.json();
    const genres = details.tags;

    console.log(details);

    console.log(details.tags);

    detailsContainer.innerHTML = "";

    genres.forEach(function (genre) {
      let filmGenres = genre.name;
      console.log(filmGenres);
    });

    // for (var i = 0; i < genres.length; i++) {
    //   console.log(genres[i].name);
    // }

    detailsContainer.innerHTML += `<div class="film-title">
                                        <h1>${details.name}</h1>
                                        <h2>${details.attributes[0].terms[0].name}</h2>
                                        <h3>${details.filmGenres}</h3>
                                      </div>
                                      <div class="film-wrapper">
                                        <img src=${details.images[1].src}
                                        alt="${details.images[1].alt}" class="film-image" />
                                          <div class="container film-info">
                                            <p>${details.description}</p>
                                            <p>Price: ${details.prices.price} ${details.prices.currency_code}</p>
    
                                              <div class="button-wrapper__film">
                                          <a href="checkout.html" class="cta">Watch Now</a>
                                              </div>
                                          </div>
                                      </div>`;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = displayMessage("error", "Oh no, couldn't fetch film details..");
  }
}

getFilmDetails();
