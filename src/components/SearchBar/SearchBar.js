import React, { Component } from 'react';
import './SearchBar.css';
import Results from './Results';
import api from '../../utils/api';
import debounce from 'lodash/debounce';

class SearchBar extends Component {
  state = {
    query: '',
    showResults: false,
    results: null
  }

  callApiFetchAnimeByQueryDebounced = debounce(
    () => this.callApiFetchAnimeByQuery(),
    300
  );

  callApiFetchAnimeByQuery = () => {
    api.fetchAnimeByQuery(this.state.query).then(response => {
      const slicedReponse = response.results.length > 4 ? response.results.slice(0, 4) : response.results;
      this.setState({ results: slicedReponse })
    }).catch(e => {
      console.log(e);
      this.setState({ results: null });
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.callApiFetchAnimeByQueryDebounced();
    }
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value }, 
      () => {
        this.state.query === '' ? 
        this.setState({ showResults: false, results: null }) : 
        this.setState({ showResults: true });
    }); 
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className={this.props.navForm ? 'nav-form' : ''}
          value={this.state.filterInput}
          onChange={this.handleInputChange}
          placeholder='Find an anime...'
          onFocus={(e) => e.target.placeholder = ''} 
          onBlur={(e) => e.target.placeholder = 'Find an anime...'} />
        {this.state.showResults && <Results data={this.state.results} />}
      </form>
    );
  }
}

export default SearchBar;