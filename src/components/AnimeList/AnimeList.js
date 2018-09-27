import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnimeList.css';
import { withRouter } from 'react-router-dom';
import AnimeListItems from './AnimeListItems';

class AnimeList extends Component {
  goToAnimeTypePage = () => {
    this.props.history.push({
      pathname: 'anime',
      search: `?type=${this.props.type}`
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='feature-title'>{this.props.title}</h1>
        <button 
          className='view-more'
          onClick={this.goToAnimeTypePage}>View all</button>
        <AnimeListItems data={this.props.data} />
      </React.Fragment>
    );
  }
}

AnimeList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default withRouter(AnimeList);