import React from 'react';
import PropTypes from 'prop-types';
import './MiddleContent.css';

const MiddleContent = ({ data }) => {
  const newLineRegex = /(?<!\w\.\w.)(?<![A-Z]\.)(?<=\.|\?|\.")\s(?![a-z])/gm;
  const synopsis = data.synopsis
    .split(newLineRegex)
    .map((item, key) => {
      return (
        <p key={key}>
          {item}<br/><br/>
        </p>
      );
    });

  const genreTags = data.genres.map((genre, index) => {
    return (
      <span 
        key={index}
        className='genre-tag'>
        {genre.name}
      </span>
    );
  });

  return (
    <div className='middle-content'>
      <h1>{data.title}</h1>
      <div className='synopsis'>{synopsis}</div>
      <div className='genres'>
        {genreTags}
      </div>
    </div>
  );
}

MiddleContent.propTypes = {
  data: PropTypes.object.isRequired
}

export default MiddleContent;