import axios from 'axios';

const api = { 
  
  switchFetchType (filter) {
    switch (filter) {
      case 'highest-rated':
        return this.fetchTopAnime();
      case 'airing':
        return this.fetchTopAnime('airing');
      case 'upcoming':
        return this.fetchTopAnime('upcoming');
      case 'current-season':
        return this.fetchCurrentSeasonAnime();
      default:
        return this.fetchTopAnime();
    }
  },

  fetchTopAnime (_type) {
    let url = '';
    _type ? 
    url = `https://api.jikan.moe/v3/top/anime/1/${_type}` : 
    url = 'https://api.jikan.moe/v3/top/anime/1';

    return axios.get(url).then(response => {
      return response.data.top;
    });
  },

  fetchCurrentSeasonAnime() {
    // Use a helper function to determine current year/season (using moment.js) instead of hard-coding it
    const url = 'https://api.jikan.moe/v3/season/2018/fall';

    return axios.get(url).then(response => {
      return response.data.anime;
    });
  }

}

export default api;