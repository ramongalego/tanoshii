import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './AnimeList.css';
import { withRouter } from 'react-router-dom';
import AnimeListItems from '../AnimeListItems/AnimeListItems';
import Loading from '../Loading';

class AnimeList extends Component {
  goToAnimeTypePage = () => {
    this.props.history.push({
      pathname: 'anime',
      search: `?filter=${this.props.filter}`
    });
  }

  render() {
    return (
      <Fragment>
        <h1 className='feature-title'>{this.props.title}</h1>
        <button 
          className='view-all'
          onClick={this.goToAnimeTypePage}>View all</button>
        {!this.props.data ? 
          <Loading /> :
          <AnimeListItems data={this.props.data} />}
      </Fragment>
    );
  }
}

AnimeList.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default withRouter(AnimeList);