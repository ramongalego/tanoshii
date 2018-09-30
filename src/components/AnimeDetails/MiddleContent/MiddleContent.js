import React from 'react';
import './MiddleContent.css';

const MiddleContent = props => {
  const { data } = props;

  const newLine = /(?<!\w\.\w.)(?<![A-Z]\.)(?<=\.|\?|\.")\s(?![a-z])/gm;
  const synopsis = data.synopsis.split(newLine).map((item, key) => {
    return (
      <p key={key}>
        {item}<br/><br/>
      </p>
    );
  });

  const genresTags = data.genres.map((genre, index) => {
    return (
      <span 
        key={index}
        className='genre-tag'>{genre.name}</span>
    );
  });

  return (
    <div className='middle-content'>
      <h1>{data.title}</h1>
      <div className='synopsis'>{synopsis}</div>
      <div className='genres'>
        {genresTags}
      </div>
    </div>
  );
}

export default MiddleContent;