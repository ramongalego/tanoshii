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
    animeData: null,
    filter: '',
    currentPage: 1,
    animePerPage: 25
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

  getPageNumbers() {
    const pageNumbers = [];
    const pageLimit = Math.ceil(this.state.animeData.length / this.state.animePerPage);

    for (let i = 1; i <= pageLimit; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  renderPageNumbers(pageNumbers) {
    return (
      <ul className='page-container'>
      {pageNumbers.map(number => (
        <li
          key={number}
          id={number}
          onClick={this.pageClick}>
          {number}
        </li>
      ))}
      </ul>
    );
  }

  pageClick = (e) => {
    this.setState({ currentPage: Number(e.target.id) });
  }

  getCurrentPageAnimeData() {
    const { animeData, currentPage, animePerPage } = this.state;

    const indexOfLastAnime = currentPage * animePerPage;
    const indexOfFirstAnime = indexOfLastAnime - animePerPage;
    const currentAnimeData = animeData.slice(indexOfFirstAnime, indexOfLastAnime);

    console.log(currentAnimeData);
    return currentAnimeData;
  }

  render() {
    return (
      <div className='anime-container'>
        <SearchBar />
        {this.state.filter && 
          <DropdownFilter filter={this.state.filter} />}
        {!this.state.animeData 
        ? <Loading /> 
        : <AnimeListItems data={this.getCurrentPageAnimeData()} />}
        {this.state.animeData && 
        this.renderPageNumbers(this.getPageNumbers())}
      </div>
    );
  }
}

export default Anime;