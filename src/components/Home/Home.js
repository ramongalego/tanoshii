import React, { Component } from 'react';
import './Home.css';
import api from '../../utils/api';
import AnimeList from '../AnimeList';

class Home extends Component {
  state = {
    highestRatedAnimeData: null,
    topAiringAnimeData: null,
    topUpcomingAnimeData: null,
    currentSeasonAnimeData: null,
    seasonName: 'Fall',
    seasonYear: '2018'
  }

  componentDidMount() {
    api.fetchTopAnime().then(response => {
      this.setState({ highestRatedAnimeData: response.slice(0, 8) });
    });
    
    api.fetchTopAnime('airing').then(response => {
      this.setState({ topAiringAnimeData: response.slice(0, 8) });
    });
  
    api.fetchTopAnime('upcoming').then(response => {
      this.setState({ topUpcomingAnimeData: response.slice(0, 8) });
    });
  
    // Remove the season_name, season_year and slice (getting response.anime from the api call)
    // when the helper function getting the year and season is in place
    api.fetchCurrentSeasonAnime().then(response => {
      this.setState({
        currentSeasonAnimeData: response.slice(0, 8)
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

    // if (!highestRatedAnimeData && !topAiringAnimeData && !topUpcomingAnimeData && !currentSeasonAnimeData) {
    //   return <Loading />;
    // }

    return (
      <div className='home-container'>
        
        <AnimeList 
          title={`${seasonName} ${seasonYear} Anime`} 
          data={currentSeasonAnimeData}
          filter='current-season' />

        <AnimeList 
          title='Top Airing Anime' 
          data={topAiringAnimeData}
          filter='airing' />

      
        <AnimeList 
          title='Top Upcoming Anime' 
          data={topUpcomingAnimeData}
          filter='upcoming' />

        <AnimeList 
          title='Highest Rated Anime' 
          data={highestRatedAnimeData}
          filter='highest-rated' />
      </div>
    );
  }
}

export default Home;