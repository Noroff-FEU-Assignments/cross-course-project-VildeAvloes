import { displayMessage } from "./components/message.js";

{
  /* <div class="film-title">
        <h1>Stairway To Heaven</h1>
        <h2>By Zed Lepplin</h2>
        <h3>Drama</h3>
      </div>
    
      <div class="film-wrapper">
        <img src="images/stairwaytoheaven-hq.jpg" alt="Cover photo of the movie: Stairway to heaven. A picture of an old man walking up stairs on a sky." class="film-image" />
        <div class="container film-info">
          <div class="ratings">
            <div>
              <i class="fa-solid fa-star star"></i>
              <i class="fa-solid fa-star star"></i>
              <i class="fa-solid fa-star star"></i>
              <i class="fa-solid fa-star star"></i>
              <i class="fa-solid fa-star-half-stroke star"></i>
            </div>
          </div>
          <p>In this film we follow a mans last days on earth. We get to know his story, his achievements and regrets before he takes the stairway to heaven.</p>
          <div class="button-wrapper__film">
            <a href="checkout.html" class="cta">Watch Now</a>
          </div>
        </div>
      </div>*/
}

const detailsContainer = document.querySelector(".film-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://vilde-avlos.no/square-eyes/wp-json/wc/store/products/" + id;

console.log(url);

async function getFilm() {
  try {
    const response = await fetch(url);
    const filmDetails = await response.json();

    console.log(filmDetails);

    createHTML(filmDetails);
  } catch (error) {
    detailsContainer.innerHTML = displayMessage("error", "Oh no, couldn't fetch film details..");
  }
}

getFilm();

function createHTML(filmDetails) {
  filmDetails.forEach(function (details) {
    detailsContainer.innerHTML += `<div class="film-title">
            <h1>${details.name}</h1>
            <h2>${details.attributes[0].terms[0].name}</h2>
            <h3>${details.tags.name}</h3>
          </div>`;
  });
}

// function createHTML(filmDetails) {
//     detailsContainer.innerHTML `<h1>${details.name}</h1>`
// }

// function createHTML(details) {
//     detailsContainer.innerHTML `<div class="film-title">
//     <h1>${details.name}</h1>
//     <h2>${details.attributes[0].terms[0].name}</h2>
//     <h3>${details.tags.name}</h3>
//   </div>`

// }
