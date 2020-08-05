import React from 'react';
import Input from '../Inputs/index';
import './style.css';


const Card = (props) => {
  return (
    <button
      id={props.idCard}
      className="classCard"
      name={props.name}
      value={props.price}
      onClick={props.handleclick}
    >
      <div className="container-icon-item">
        <figure className="container-icons">
          <img id={props.imgId} alt="icon-item"></img>
        </figure>
        <span className="class-item">{props.item_name}</span>
        <span className="price">R${props.price}</span>
      </div>

      <label className="highlights-button" htmlFor="modal-menu">Opções</label>
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
    </button>
  );
};

export default Card;
