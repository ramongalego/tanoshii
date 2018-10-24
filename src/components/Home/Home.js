import React, { Component } from 'react';
import './Home.css';
import { fetchTopAnime, fetchCurrentSeasonAnime } from '../../utils/api';
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

  async componentDidMount() {
    this._mounted = true;
    // Set seasonName and seasonYear from the helper function
    fetchTopAnime().then(highestRated => {
      this._mounted && this.setState({ highestRatedAnimeData: highestRated.slice(0, 8) });
    });
    
    fetchTopAnime('airing').then(topAiring => {
      this._mounted && this.setState({ topAiringAnimeData: topAiring.slice(0, 8) });
    });
  
    fetchTopAnime('upcoming').then(topUpcoming => {
      this._mounted && this.setState({ topUpcomingAnimeData: topUpcoming.slice(0, 8) });
    });
  
    fetchCurrentSeasonAnime().then(currentSeason => {
      this._mounted && this.setState({ currentSeasonAnimeData: currentSeason.slice(0, 8) });
    });
  }

  componentWillUnmount() {
    this._mounted = false;
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
