import { pullId } from './api.js';

export const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rHhNSvK2vYzG0HnCQK6H/likes/';
const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rHhNSvK2vYzG0HnCQK6H/comments';

export const postLike = async (id) => {
  const response = await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getLike = async () => {
  const response = await fetch(likesURL);
  const like = await response.json();

  return like;
};

const createComment = async (obj) => {
  const commentBody = {
    item_id: obj.item_id,
    username: obj.username,
    comment: obj.comment,
  };

  const response = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });

  return response.status;
};

const getComments = async (id) => {
  try {
    const response = await fetch(`${commentsURL}?item_id=${id}`);
    const comments = await response.json();

    return comments;
  } catch (error) {
    return [];
  }
};

const getCommentsNumber = (commentId) => {
  const commentsContent = document.querySelectorAll(`[comment-id="${commentId}"]`)[0]
    .parentElement.previousElementSibling.children;

  const commentsCount = [...commentsContent].filter((elem) => elem.nodeName === 'P').length;

  return commentsCount;
};

const updateCommentTitle = (id) => {
  const numberOfComments = getCommentsNumber(id);

  const commentsContent = document.querySelectorAll(`[comment-id="${id}"]`)[0]
    .parentElement.previousElementSibling.children;

  if (commentsContent.length > 0) {
    const commentTitle = [...commentsContent].filter((elem) => elem.nodeName === 'H3')[0];

    commentTitle.innerText = `Comments (${numberOfComments})`;
  }
};

const genPopupContent = async (show) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  popup.innerHTML = '';
  const image = show.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';

  const showId = show.id;
  const comments = await getComments(showId);

  let commentBlock = '';

  popup.insertAdjacentHTML('beforeend', ` 
      <div class="popup-container">
        <div class="popup-header">
            <h2>${show.name}</h2>
            <i class="fas fa-times close-popup"></i>
        </div>
        <div class="show-info">
          <div class="image-info">
            <img src="${image}" />
              <p>Type: ${show.type}</p>
              <p>Language: ${show.language}</p>
              <p>Status: ${show.status}</p>
              <p>Premiered: ${show.premiered}</p>
          </div>
          <div class="comment-section"> 
            <div class="comments-display">
              ${commentBlock}
            </div>
            <div class="comment-create">
              <h3>Add a comment</h3>
              <input name="username" placeholder="Your name" />
              <textarea name="insights" rows="6" placeholder="Your Thoughts"></textarea>
              <button type="button" comment-id="${show.id}" class="material-icons-outlined btn-com">Comment</button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>`);
  document.querySelector('main').appendChild(popup);
  const closeButton = document.getElementsByClassName('close-popup')[0];
  closeButton.addEventListener('click', () => {
    document.querySelector('.popup').remove();
  });

  const commentsDisplay = document.querySelectorAll(`[comment-id="${show.id}"]`)[0]
    .parentElement.previousElementSibling;

  if (comments.length > 0) {
    commentBlock += '<h3>Comments</h3>';
    comments.forEach((comment) => {
      const date = comment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;
    });
  }
  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);

  updateCommentTitle(show.id);

  const commentButton = document.querySelectorAll(`[comment-id="${show.id}"]`)[0];
  commentButton.addEventListener('click', async (e) => {
    const commentObject = {
      item_id: Number(e.target.getAttribute('comment-id')),
      username: commentButton.previousElementSibling.previousElementSibling.value,
      comment: commentButton.previousElementSibling.value,
    };

    const result = await createComment(commentObject);

    if (result === 201) {
      const comments = await getComments(showId);
      const lastComment = comments[comments.length - 1];
      const commentsDisplay = document.querySelectorAll(`[comment-id="${show.id}"]`)[0]
        .parentElement.previousElementSibling;
      const date = lastComment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;

      if (comments.length === 1) {
        commentsDisplay.insertAdjacentHTML('beforeend', `
            <h3>Comments</h3>
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `);
      } else {
        commentsDisplay.insertAdjacentHTML('beforeend', `
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `);
      }
      updateCommentTitle(show.id);
    }
  });
};

const displayPopup = async (id) => {
  const show = await pullId(id);
  genPopupContent(show);
};

export default displayPopup;