import { getShow } from './filmInfo.js';

export const loadInterface = () => {
  const showContainer = document.querySelector('.container');
  getShow().then((showArray) => {
    showArray.forEach((show) => {
      const showCard = document.createElement('li');
      showCard.className = 'film';
      showCard.setAttribute('id', `${show.id}`);
      showCard.innerHTML = `<img class="poster" src="${show.image.medium}">
      <div class="card-header">
      <p>${show.name}</p>
      <img class="like-icon">
      </div>
      <p>Likes</p>
      <button type="button" class="comment-popup">Comments</button>
      <button type="button" class="rent-popup">Rent</button>`;
      showContainer.appendChild(showCard);
    });
  });
};