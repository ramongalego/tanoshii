import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const AnimeTrailer = props => {
  return (
    <div className='anime-trailer'>
      <FontAwesomeIcon className='play' icon={faPlay} />
      <h3>Play Trailer</h3>
    </div>
  )
}

export default AnimeTrailer;