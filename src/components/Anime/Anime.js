import React, { Component } from 'react';
import './Anime.css';
import Loading from '../Loading';
import api from '../../utils/api';
import AnimeListItems from '../AnimeListItems';
import queryString from 'query-string';

class Anime extends Component {
  state = {
    initialData: null,
    filteredData: null,
    filterInput: ''
  }

  componentDidMount() {
    const filter = queryString.parse(this.props.location.search).filter;

    console.log(filter);

    api.switchFetchType(filter).then(response => {
      console.log(response);
      this.setState({ 
        initialData: response,
        filteredData: response
      });
    });
  }

  handleInputChange = (e) => {
    this.setState({ filterInput: e.target.value }, () => {
      const filteredData = this.state.initialData.filter(anime => {
        return anime.title.toLowerCase().includes(this.state.filterInput.toLowerCase());
      });

      this.setState({ filteredData });
    });    
  }

  render() {
    return (
      <div className='anime-container'>
        <input
          type='text'
          value={this.state.filterInput}
          onChange={this.handleInputChange}
          placeholder='Filter List...'
          onFocus={(e) => e.target.placeholder = ''} 
          onBlur={(e) => e.target.placeholder = 'Filter List...'} />

        {!this.state.initialData ? 
          <Loading /> : 
          <AnimeListItems data={this.state.filteredData} />}
      </div>
    );
  }
}

export default Anime;