import React from 'react';
import PropTypes from 'prop-types';
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

AnimeTrailer.propTypes = {
  trailer: PropTypes.string.isRequired
}

export default AnimeTrailer;