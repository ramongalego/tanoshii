import React, { Component } from 'react';
import './FilterFunctions.css';

class FilterFunctions extends Component {
  state = {
    query: ''
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  }

  render() {
    return (
      <React.Fragment>
        <input
          type='text'
          value={this.state.query}
          onChange={this.handleInputChange} />
      </React.Fragment>
    );
  }
}

export default FilterFunctions;