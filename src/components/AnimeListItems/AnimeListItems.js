import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './AnimeListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

const AnimeListItems = ({ data, history }) => {
  const goToAnimeDetailsPage = (id) => {
    history.push({
      pathname: `anime/${id}`
    });
  }

  if (!data) return null;

  return (
    <Fragment>
      <ul className='feature-list'>
        {data.map(anime => {
          return (
            <li 
              key={anime.mal_id}
              onClick={() => goToAnimeDetailsPage(anime.mal_id)}>
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
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

AnimeListItems.propTypes = {
  data: PropTypes.array.isRequired
}

export default withRouter(AnimeListItems);