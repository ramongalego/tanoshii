import axios from 'axios';

export function switchFetchType (filter) {
  switch (filter) {
    case 'highest-rated':
      return fetchTopAnime();
    case 'airing':
      return fetchTopAnime(filter);
    case 'upcoming':
      return fetchTopAnime(filter);
    case 'current-season':
      return fetchCurrentSeasonAnime();
    default:
      return fetchTopAnime();
  }
}

export async function fetchTopAnime (_type) {
  let url = '';
  
  _type 
  ? url = `https://api.jikan.moe/v3/top/anime/1/${_type}` 
  : url = 'https://api.jikan.moe/v3/top/anime/1';

  console.log('Making call to:', url);

  const topAnime = await axios.get(url);

  return topAnime.data.top;
}

export async function fetchCurrentSeasonAnime() {
  // Use a helper function to set current year/season (using moment.js) instead of hard-coding it
  const url = 'https://api.jikan.moe/v3/season/2018/fall';

  console.log('Making call to:', url);

  const currentSeasonAnime = await axios.get(url);

  const currentSeasonAnimeFiltered = await currentSeasonAnime.data.anime
    .filter(anime => {
      return anime.genres[0].name !== 'Hentai';
    });

  return currentSeasonAnimeFiltered;
}

export async function fetchAnimeById (id) {
  const url = `https://api.jikan.moe/v3/anime/${id}`;

  console.log('Making call to:', url);

  const anime = await axios.get(url);

  return anime.data;
}

export async function fetchAnimeByQuery (query) {
  const url = `https://api.jikan.moe/v3/search/anime?q=${query}`;

  console.log('Making call to:', url);

  const anime = await axios.get(url);

  return anime.data;
}
