import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      <div className='modal-outside'>
        <div className='modal-inside'>
          {this.props.children}
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;