import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    query: ''
  }

  handleInputChange = (e) => {
    console.log(e.target.value); 
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.filterInput}
          onChange={this.handleInputChange}
          placeholder='Find an anime'
          onFocus={(e) => e.target.placeholder = ''} 
          onBlur={(e) => e.target.placeholder = 'Find an anime'} />
      </form>
    );
  }
}

export default SearchBar;