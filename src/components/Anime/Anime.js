import React, { Component } from 'react';
import './Anime.css';
import Loading from '../Loading';
import { switchFetchType } from '../../utils/api';
import AnimeListItems from '../AnimeListItems';
import queryString from 'query-string';
import SearchBar from '../SearchBar';
import DropdownFilter from '../DropdownFilter';

class Anime extends Component {
  state = {
    animeData: null,
    filter: '',
    currentPage: 1,
    animePerPage: 30
  }

  async componentDidMount() {
    const filter = queryString.parse(this.props.location.search).filter;

    this.setState({ filter });

    const animeData = await switchFetchType(filter);
    this.setState({ animeData });
  }

  async componentDidUpdate (prevProps, _prevState) {
    const prevFilter = queryString.parse(prevProps.location.search).filter;
    const thisFilter = queryString.parse(this.props.location.search).filter;

    if (prevFilter !== thisFilter) {
      this.setState({ animeData: null });

      const animeData = await switchFetchType(thisFilter);
      this.setState({ animeData });
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
            className={this.state.currentPage === number ? 'selected-page' : ''}
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
    const currentPage = Number(e.target.id);

    this.setState({ currentPage });
  }

  getCurrentPageAnimeData() {
    const { animeData, currentPage, animePerPage } = this.state;

    const indexOfLastAnime = currentPage * animePerPage;
    const indexOfFirstAnime = indexOfLastAnime - animePerPage;
    const currentPageAnimeData = animeData.slice(indexOfFirstAnime, indexOfLastAnime);

    console.log('currentPageAnimeData', currentPageAnimeData);
    return currentPageAnimeData;
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