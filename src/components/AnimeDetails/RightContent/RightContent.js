import React from 'react';
import PropTypes from 'prop-types';
import './RightContent.css';
import AnimeTrailer from './AnimeTrailer';

const RightContent = props => {
  const { data } = props;

  return (
    <div className='right-content'>
      <AnimeTrailer trailer={data.trailer_url} />
      <div className='info-bar'>
        <p>Anime Details</p>
        <p>English</p> {data.title_english}
        <p>Japanese</p> {data.title_japanese}
        <p>Type: <span>{data.type}</span></p>
        {data.type === 'TV' && <p>Episodes: <span>{data.episodes}</span></p>}
        {data.premiered && <p>Season: <span>{data.premiered}</span></p>}
        <p>Status: <span>{data.status}</span></p>
        {data.studios && <p>Studio: <span>{data.studios.map(studio => studio.name)}</span></p>}
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