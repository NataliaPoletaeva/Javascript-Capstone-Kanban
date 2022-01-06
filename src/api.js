const linkBase = 'https://api.tvmaze.com/shows/';


const pullId = async (id) => {
  const response = await fetch(linkBase + id);
  const show = await response.json();

  return show;
};

export { pullId };