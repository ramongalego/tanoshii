import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './DropdownFilter.css';

class DropdownFilter extends Component {
  state = {
    selected: ''
  }

  static propTypes = {
    filter: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.setState({ selected: this.props.filter });
  }

  handleSelectChange = (e) => {
    const value = e.target.value;

    this.setState({ selected: value }, () => {
      this.props.history.push({
        search: `?filter=${this.state.selected}`
      });
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className='dropdown-container'>
        <select 
          value={selected}
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

export default withRouter(DropdownFilter);
