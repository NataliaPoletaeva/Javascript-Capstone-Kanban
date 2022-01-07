import { getShow } from './filmInfo.js';
import displayPopup, { getLike, likesURL } from './engagement.js';

export const renderInterface = async () => {
  const showContainer = document.querySelector('.container');
  const likesArr = await getLike();
  getShow().then((showArray) => {
    showArray.forEach((show, id) => {
      const showCard = document.createElement('li');
      showCard.className = 'film';
      showCard.setAttribute('id', `${show.id}`);
      showCard.innerHTML = `<img class="poster" src="${show.image.medium}">
      <div class="card-header">
      <p>${show.name}</p>
      <i class="far fa-heart like-btn"></i>
      </div>
      <p>Likes: 
      <span class="likes-counter">${likesArr[id].likes}</span>
      </p>
      <button data-id="${show.id}" class="btn-comments">Comments</button>`;
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
      like.addEventListener('click', async (e) => {
        const likesCounter = document.querySelectorAll('.likes-counter')[id];
        const showId = e.target.parentElement.parentElement.getAttribute('id');
        if (e.target.classList.contains('far')) {
          e.target.classList.remove('far');
          e.target.classList.add('fas');
          likesCounter.innerHTML = Number(likesCounter.innerHTML) + 1;
          const likeObject = {
            item_id: Number(showId),
            likes: Number(likesCounter.innerHTML),
          };
          await fetch(likesURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(likeObject),
          });
        } else {
          e.target.classList.remove('fas');
          e.target.classList.add('far');
          likesCounter.innerHTML = Number(likesCounter.innerHTML) - 1;
          const likeObject = {
            item_id: Number(showId),
            likes: Number(likesCounter.innerHTML),
          };
          await fetch(likesURL, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(likeObject),
          });
        }
      });
    });
  });
};