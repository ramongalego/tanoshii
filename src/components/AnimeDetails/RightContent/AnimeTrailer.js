import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal';

class AnimeTrailer extends Component {
  state = {
    showModal: false
  }

  static propTypes = {
    trailer: PropTypes.string
  }

  toggleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { showModal } = this.state;
    const { trailer } = this.props;

    return (
      <div className='anime-trailer' onClick={this.toggleShowModal}>
        <FontAwesomeIcon className='play' icon={faPlay} />
        <h3>Play Trailer</h3>
        {showModal &&
          <Modal>
            <iframe 
              title='Anime Trailer'
              aria-hidden='true'
              type='text/html'
              className='iframe-trailer'
              src={trailer}
              frameBorder='0'></iframe>
          </Modal>}
      </div>
    );
  }
}

export default AnimeTrailer;
