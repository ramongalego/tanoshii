import React, { Component } from 'react';
import './Anime.css';
import Loading from '../Loading';
import api from '../../utils/api';
import AnimeListItems from '../AnimeListItems';
import queryString from 'query-string';
import SearchBar from '../SearchBar';
import DropdownFilter from '../DropdownFilter';

class Anime extends Component {
  state = {
    filter: '',
    animeData: null
  }

  componentDidMount() {
    const filter = queryString.parse(this.props.location.search).filter;

    this.setState({ filter });

    api.switchFetchType(filter).then(response => {
      this.setState({ animeData: response });
    });
  }

  componentDidUpdate (prevProps, _prevState) {
    const prevFilter = queryString.parse(prevProps.location.search).filter;
    const thisFilter = queryString.parse(this.props.location.search).filter;

    if (prevFilter !== thisFilter) {
      this.setState({ animeData: null }, () => {
        api.switchFetchType(thisFilter).then(response => {
          this.setState({ animeData: response });
        });
      });
    }
  }

  render() {
    return (
      <div className='anime-container'>
        <SearchBar />
        {this.state.filter && 
          <DropdownFilter filter={this.state.filter} />}
        {!this.state.animeData ? 
          <Loading /> : 
          <AnimeListItems
            data={this.state.animeData} />}
      </div>
    );
  }
}

export default Anime;