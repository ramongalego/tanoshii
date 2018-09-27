import axios from 'axios';

const api = { 

  fetchTopAnime(_type) {
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
      return response.data;
    });
  }

}

export default api;