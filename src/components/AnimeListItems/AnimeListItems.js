import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './AnimeListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class AnimeListItems extends Component {
  goToAnimeDetailsPage = (id) => {
    this.props.history.push({
      pathname: `anime/${id}`
    });
  }

  render() {
    return (
      <Fragment>
        <ul className='feature-list'>
          {this.props.data.map(anime => {
            return (
              <li 
                key={anime.mal_id}
                onClick={() => this.goToAnimeDetailsPage(anime.mal_id)}>
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
                  {/*<button>Add To Library</button>*/}
                </div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

AnimeListItems.propTypes = {
  data: PropTypes.array.isRequired
}

export default withRouter(AnimeListItems);