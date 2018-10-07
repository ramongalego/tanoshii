import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './AnimeList.css';
import { withRouter } from 'react-router-dom';
import AnimeListItems from '../AnimeListItems/AnimeListItems';
import Loading from '../Loading';

const AnimeList = ({ history, filter, title, data }) => {
  const goToAnimeTypePage = () => {
    history.push({
      pathname: 'anime',
      search: `?filter=${filter}`
    });
  }

  return (
    <Fragment>
      <h1 className='feature-title'>{title}</h1>
      <button 
        className='view-all'
        onClick={goToAnimeTypePage}>View all</button>
      {!data ? 
        <Loading /> :
        <AnimeListItems data={data} />}
    </Fragment>
  );
}

AnimeList.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default withRouter(AnimeList);