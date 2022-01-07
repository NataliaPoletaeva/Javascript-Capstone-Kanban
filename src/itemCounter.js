import { getShow } from './filmInfo.js';

export const counter = async () => {
  const allShows = await getShow();
  const showCounter = allShows.length;
  const itemCounter = document.querySelector('.item-counter');
  itemCounter.innerHTML = `${showCounter}`;
};
