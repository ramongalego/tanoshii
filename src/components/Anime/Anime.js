import React, { Component } from 'react';
import './Anime.css';
// import api from '../../utils/api';

class Anime extends Component {
  state = {
    initialData: null,
    filteredData: null,
    filterInput: ''
  }

  componentDidMount() {
    // api.fetchTopAnime().then(response => {
    //   this.setState({ 
    //     initialData: response,
    //     filteredData: response
    //   });
    //   console.log(this.state.initialData);
    // });
  }

  handleInputChange = (e) => {
    // this.setState({ filterInput: e.target.value }, () => {
    //   const filteredData = this.state.initialData.filter(film => {
    //     return film.title.toLowerCase().includes(this.state.filterInput.toLowerCase());
    //   });

    //   this.setState({ filteredData });
    // });    
  }

  render() {
    // console.log(this.state.filteredData);

    // if (!this.state.initialData) {
    //   return <p>Loading...</p>;
    // })

    return (
      <React.Fragment>
        <input
          type='text'
          value={this.state.filterInput}
          onChange={this.handleInputChange} />
      </React.Fragment>
    );
  }
}

export default Anime;