import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  callApiFetchAnimeByQuery = () => {
    this.setState({ results: null });
    api.fetchAnimeByQuery(this.state.query).then(response => {
      const slicedReponse = response.results.length > 4 ? 
      response.results.slice(0, 4) : 
      response.results;
      this.setState({ results: slicedReponse });
    }).catch(e => {
      console.log(e);
      this.setState({ results: null });
    });
  }

  callApiFetchAnimeByQueryDebounced = debounce(
    () => this.callApiFetchAnimeByQuery(),
    300
  );

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.callApiFetchAnimeByQueryDebounced();
    }
  }

  toggleShowResults = () => {
    this.setState({ showResults: !this.state.showResults });
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

  handleBlur = (e) => {
    e.target.placeholder = 'Find an anime...';
    // this.setState({ showResults: false });
  }

  handleFocus = (e) => {
    e.target.placeholder = '';
    if (this.state.results) {
      this.setState({ showResults: true });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className={this.props.navForm ? 'nav-form' : ''}
          placeholder='Find an anime...'
          value={this.state.filterInput}
          onChange={this.handleInputChange}
          onFocus={this.handleFocus} 
          onBlur={this.handleBlur} />
        {this.state.showResults && 
        <Results 
          data={this.state.results} 
          navForm={this.props.navForm}
          toggleShowResults={this.toggleShowResults} />}
      </form>
    );
  }
}

SearchBar.propTypes = {
  navForm: PropTypes.bool
}

export default SearchBar;