import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  const filmContainer = document.querySelector('.container');
  for (let i = 0; i < 6; i += 1) {
    const filmCard = document.createElement('li');
    filmCard.className = 'film';
    filmCard.innerHTML = `<img class="poster" src="./src/poster.jpg">
    <div class="card-header">
    <p>Film Title</p>
    <img class="like-icon">
    </div>
    <p>Likes</p>
    <button type="button" class="comment-popup">Comments</button>
    <button type="button" class="rent-popup">Rent</button>`;
    filmContainer.appendChild(filmCard);
  }
});