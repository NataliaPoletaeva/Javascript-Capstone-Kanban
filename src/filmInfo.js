const baseURL = 'https://api.tvmaze.com';

export const getShow = async () => {
  const showArray = [];
  for (let i = 1; i < 16; i += 1) {
    const showInfo = await fetch(`${baseURL}/shows/${i}`);
    const jsonInfo = await showInfo.json();
    showArray.push(jsonInfo);
  }
  return showArray;
};