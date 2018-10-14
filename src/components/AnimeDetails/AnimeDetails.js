import React, { Component } from 'react';
import './AnimeDetails.css';
import { fetchAnimeById } from '../../utils/api';
import Loading from '../Loading';
import LeftContent from './LeftContent';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class AnimeDetails extends Component {
  state = {
    animeData: null
  }

  getIdAndFetchResults = async () => {
    const animeId = Number(this.props.location.pathname.match(/\d+/g));
    
    const animeData = await fetchAnimeById(animeId);
    this.setState({ animeData });
    console.log('animeData', animeData);
  }

  componentDidMount() {
    this.getIdAndFetchResults();
  }

  componentDidUpdate(prevProps, _prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ animeData: null });
      this.getIdAndFetchResults();
    }
  }

  render() {
    const { animeData } = this.state;
    const { history } = this.props;

    if (!animeData) {
      return <Loading style={{ position: 'absolute' }} />;
    }
    
    return (
      <div className='details-container'>
        <FontAwesomeIcon 
          className='back-button' 
          icon={faArrowLeft}
          onClick={history.goBack} />
        <LeftContent data={animeData} />
        <MiddleContent data={animeData} />
        <RightContent data={animeData} />
      </div>
    );
  }
}

export default AnimeDetails;