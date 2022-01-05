import { getShow } from "./filmInfo.js";
import displayPopup from './engagement.js';

export const loadInterface = () => {
  const showContainer = document.querySelector(".container");
  getShow().then((showArray) => {
    showArray.forEach((show) => {
      const showCard = document.createElement("li");
      showCard.className = "film";
      showCard.setAttribute("id", `${show.id}`);
      showCard.innerHTML = `<img class="poster" src="${show.image.medium}">
      <div class="card-header">
      <p>${show.name}</p>
      <img class="like-icon">
      </div>
      <p>Likes</p>
      <button data-id="${shows[i].show.id}" class="btn-comments">Comments</button>
      <button type="button" class="rent-popup">Rent</button>`;
      showContainer.appendChild(showCard);
      const button = document.querySelectorAll(
        `[data-id="${show[i].show.id}"]`
      )[0];
      button.addEventListener("click", (e) => {
        const showId = e.target.getAttribute("data-id");
        displayPopup(showId);
      });
    });
  });
};
