import React, { Component } from 'react';
import './Home.css';
import api from '../../utils/api';
import AnimeList from '../AnimeList';
import Loading from '../Loading';

class Home extends Component {
  state = {
    highestRatedAnimeData: null,
    topAiringAnimeData: null,
    topUpcomingAnimeData: null,
    currentSeasonAnimeData: null,
    seasonName: null,
    seasonYear: null
  }

  componentDidMount() {
    api.fetchTopAnime().then(response => {
      this.setState({ highestRatedAnimeData: response.slice(0, 7) });
    });
    
    api.fetchTopAnime('airing').then(response => {
      this.setState({ topAiringAnimeData: response.slice(0, 7) });
    });
  
    api.fetchTopAnime('upcoming').then(response => {
      this.setState({ topUpcomingAnimeData: response.slice(0, 7) });
    });
  
    // Remove the season_name, season_year and slice (getting response.anime from the api call)
    // when the helper function getting the year and season is in place
    api.fetchCurrentSeasonAnime().then(response => {
      this.setState({
        currentSeasonAnimeData: response.anime.slice(0, 7),
        seasonName: response.season_name,
        seasonYear: response.season_year
      });
    });
  }
  
  render() {
    const { 
      highestRatedAnimeData, 
      topAiringAnimeData, 
      topUpcomingAnimeData, 
      currentSeasonAnimeData, 
      seasonName, 
      seasonYear
    } = this.state;

    if (!highestRatedAnimeData && !topAiringAnimeData && !topUpcomingAnimeData && !currentSeasonAnimeData) {
      return <Loading />;
    }

    return (
      <div className='home-container'>
        {currentSeasonAnimeData && 
          <AnimeList 
            title={`${seasonName} ${seasonYear} Anime`} 
            data={currentSeasonAnimeData}
            type='seasons' />}

        {topAiringAnimeData && 
          <AnimeList 
            title='Top Airing Anime' 
            data={topAiringAnimeData}
            type='airing' />}

        {topUpcomingAnimeData && 
          <AnimeList 
            title='Top Upcoming Anime' 
            data={topUpcomingAnimeData}
            type='upcoming' />}

        {highestRatedAnimeData && 
          <AnimeList 
            title='Highest Rated Anime' 
            data={highestRatedAnimeData}
            type='highest-rated' />}
      </div>
    );
  }
}

export default Home;