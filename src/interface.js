import { getShow } from './filmInfo.js';
import displayPopup, { getLike, likesURL } from './engagement.js';

export const loadInterface = async () => {
  const showContainer = document.querySelector('.container');
  const likesArr = await getLike();
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
      <button data-id="${show.id}" class="btn-comments">Comments</button>
      <button type="button" class="rent-popup">Rent</button>`;
      showContainer.appendChild(showCard);
      const button = document.querySelectorAll(
        `[data-id="${show.id}"]`,
      )[0];
      button.addEventListener('click', (e) => {
        const showId = e.target.getAttribute('data-id');
        displayPopup(showId);
      });
    });
    const likeBtn = document.querySelectorAll('.like-btn');
    likeBtn.forEach((like, id) => {
      like.addEventListener('click', async () => {
        const likesCount = document.querySelectorAll('.likes-counter');
        likesCount[id].innerHTML = `${likesArr[id].likes}`;
        await fetch(likesURL, {
          method: 'POST',
          body: JSON.stringify({ item_id: id }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        });
        if (like.classList.contains('far')) {
          like.className = 'fas fa-heart';
        } else {
          like.className = 'far fa-heart';
        }
      });
    });
  });
};