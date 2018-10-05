import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal';

class AnimeTrailer extends Component {
  state = {
    showModal: false
  }

  toggleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className='anime-trailer' onClick={this.toggleShowModal}>
        <FontAwesomeIcon className='play' icon={faPlay} />
        <h3>Play Trailer</h3>
        {this.state.showModal &&
          <Modal>
            <iframe 
              title='Anime Trailer'
              aria-hidden='true'
              type='text/html'
              className='iframe-trailer'
              src={this.props.trailer}
              frameBorder='0'></iframe>
          </Modal>
        }
      </div>
    );
  }
}

AnimeTrailer.propTypes = {
  trailer: PropTypes.string.isRequired
}

export default AnimeTrailer;