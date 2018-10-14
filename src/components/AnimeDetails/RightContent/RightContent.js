import React from 'react';
import PropTypes from 'prop-types';
import './RightContent.css';
import AnimeTrailer from './AnimeTrailer';

const RightContent = ({ data }) => {
  const getAndFormatStudios = () => {
    let studios = [];

    data.studios.forEach(studio => {
      studios.push(studio.name);
    });

    if (data.studios.length > 1) {
      return <p>Studios: <span>{studios.join(', ')}</span></p>;
    } 

    return <p>Studio: <span>{studios}</span></p>;
  }

  return (
    <div className='right-content'>
      {data.trailer_url && <AnimeTrailer trailer={data.trailer_url} />}
      <div className='info-bar'>
        <p>Anime Details</p>
        <p>English</p> {data.title_english}
        <p>Japanese</p> {data.title_japanese}
        <p>Type: <span>{data.type}</span></p>
        {data.type === 'TV' && <p>Episodes: <span>{data.episodes}</span></p>}
        {data.premiered && <p>Season: <span>{data.premiered}</span></p>}
        <p>Status: <span>{data.status}</span></p>
        {getAndFormatStudios()}
        {data.source && <p>Source: <span>{data.source}</span></p>}
        {data.rating && <p>Rating: <span>{data.rating}</span></p>}
      </div>
    </div>
  );
}

RightContent.propTypes = {
  data: PropTypes.object.isRequired
}

export default RightContent;