import React from 'react';
import Input from '../Inputs/index'
import './style.css';

const Card  = (props) => {
  return (

  <div id={props.idCard} className="classCard">
    <div className="container-icon-item">
      <figure className="container-icons">
        <img id={props.imgId} alt="icon-item"></img>
      </figure>
      <span className="class-item">{props.item_name}</span>
      <span className="price">R${props.price}</span>
    </div>
    
    <a href="#abrirModal">Opções</a>
    <div id="abrirModal" className="modal">
      <div>
      <a href="#fechar" title="Fechar" className="fechar">X</a>
      <Input type="radio" id={props.idSabores} name="options" value={props.idSabores}/>
      <label htmlFor={props.idSabores}></label>
      </div>
    </div>

  </div>
  )
};

export default Card;