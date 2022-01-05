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

export { pullMovies, pullId };