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
      <div className="container-item">
        
        <figure className="container-icons">
          <img className='class-icon' src={require('../../Image/Menu_Icons/'+ props.item_name +'.png')} alt="icon-item"></img>
          {/* <img className='class-icon' src={require('../../Image/Menu_Icons/' + props.item_name + '.png')} alt="icon-item"></img> */}
        </figure>

        <div className='container-item-price-options'>
          
          <div className='container-item-price'>
            <span className='class-item'>{props.item_name}</span>
            <span className='price'>R$ {props.price}</span>
          </div> 

          <div className='container-options-value'>
            <label className="highlights-button" htmlFor="modal-menu">Opções</label>
            <label className="options-description" > XXXXXX</label>
          </div>

        </div>

      </div>



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
