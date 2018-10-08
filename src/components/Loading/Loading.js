import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = (props) => (
  <div className='loading-spinner' style={props.style} />
)

Loading.propTypes = {
  style: PropTypes.object
}

export default Loading;