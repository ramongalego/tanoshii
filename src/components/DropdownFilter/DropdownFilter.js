import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './DropdownFilter.css';

class DropdownFilter extends Component {
  state = {
    selected: ''
  }

  componentDidMount() {
    this.setState({ selected: this.props.filter });
  }

  handleSelectChange = (e) => {
    this.setState({ selected: e.target.value }, () => {
      this.props.history.push({
        search: `?filter=${this.state.selected}`
      });
    });
  }

  render() {
    return (
      <div className='dropdown-container'>
        <select 
          value={this.state.selected}
          onChange={this.handleSelectChange}>
          <option value='current-season'>Fall 2018 Anime</option>
          <option value='airing'>Top Aring Anime</option>
          <option value='upcoming'>Top Upcoming Anime</option>
          <option value='highest-rated'>Highest Rated Anime</option>
        </select>
      </div>
    );
  }
}

DropdownFilter.propTypes = {
  filter: PropTypes.string.isRequired
}

export default withRouter(DropdownFilter);
