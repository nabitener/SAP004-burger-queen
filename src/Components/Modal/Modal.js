import React from 'react';
import Input from '../Inputs/index';
import './style.css';

const Modal = (props) => {
  return (
    <>
      <label className="highlights-button" htmlFor="modal-menu">
        Opções
      </label>
      <label className="options-description"> XXXXXX</label>

      <Input type="checkbox" id="modal-menu" />
      <div className="modal">
        <div className="modal-content">
          <Input
            type="radio"
            id={props.idSabores}
            name="options"
            value={props.idSabores}
          />
          <label htmlFor={props.idSabores}></label>
        </div>
        <label className="modal-close" htmlFor="modal-menu"></label>
      </div>
    </>
  );
};

export default Modal;