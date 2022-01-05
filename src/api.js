const genre = 'animation';
const linkBase = 'https://api.tvmaze.com/shows/';
const searchURL = `https://api.tvmaze.com/search/shows?q=${genre}`;

const pullMovies = async () => {
  const response = await fetch(searchURL);
  const shows = await response.json();

  return shows;
};

const pullId = async (id) => {
  const response = await fetch(linkBase + id);
  const show = await response.json();

  return show;
};

exports.pullId = pullId;
exports.pullShows = pullShows;