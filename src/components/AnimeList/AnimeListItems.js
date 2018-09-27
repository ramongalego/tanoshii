import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnimeList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class AnimeListItems extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='feature-list'>
          {this.props.data.map(anime => {
            return (
              <li key={anime.mal_id}>
                <img src={anime.image_url} alt={`${anime.title}`} />
                <div className='list-hover-container'>
                  <p>{anime.title}</p>
                  {anime.start_date && <p>{anime.start_date}</p>}
                  <p>
                    {anime.type !== 'TV' && anime.type} 
                    {anime.episodes && anime.type === 'TV' && 
                    `${anime.episodes} episodes`}
                  </p>
                  {anime.score > 0 && 
                    <p>
                      <FontAwesomeIcon className='star' icon={faStar} /> 
                      {(anime.score * 10).toFixed(1)}%
                    </p>}
                  <button>Add To Library</button>
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

AnimeListItems.propTypes = {
  data: PropTypes.array.isRequired
}

export default AnimeListItems;