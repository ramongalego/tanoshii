import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from '../SearchBar';

const NavBar = props => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar-content'>
        <Link to='/'>
          <div className='nav-bar-content-logo'>
            <FontAwesomeIcon className='logo' icon={faDove} />
            <h1>tanoshii</h1>
          </div>
        </Link>
        <SearchBar navForm />
      </div>
      
    </div>
  );
}

export default NavBar;