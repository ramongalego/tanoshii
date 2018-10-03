import React from 'react';
import PropTypes from 'prop-types';
import './LeftContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LeftContent = props => {
  const { data } = props;
  return (
    <div className='left-content'>
      <img src={data.image_url} alt={data.title} />
      {data.score > 0 && 
      <p className='score'>
        <FontAwesomeIcon className='star' icon={faStar} />
        {(data.score * 10).toFixed(1)}%
      </p>}
    </div>
  );
}

LeftContent.propTypes = {
  data: PropTypes.object.isRequired
}

export default LeftContent;