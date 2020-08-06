import React from 'react';
import './style.css';
import Button from '../Buttons';

const Card = (props) => {
  return (
    <div key={props.name} id={props.idCard} className="classCard">
      <div className="container-item">
        <figure className="container-icons">
          <img
            className="class-icon"
            src={require('../../Image/Menu_Icons/' + props.item_name + '.png')}
            alt="icon-item"
          ></img>
          {/* <img className='class-icon' src={require('../../Image/Menu_Icons/' + props.item_name + '.png')} alt="icon-item"></img> */}
        </figure>

        <div className="container-item-price-options">
          <div className="container-item-price">
            <span className="class-item">{props.item_name}</span>
            <span className="price">R$ {props.price}</span>
          </div>
          
          <div className="container-options-value-button">
            
            <div className='container-options-value'>
              <label className="highlights-button" htmlFor="modal-menu">
                Opções
              </label>
              {/* <label className="options-description"> Vegetariano</label> */}
            </div>

            <div className='add-button'>
              <Button
                name="+"
                id={props.name}
                value={props.price}
                onClick={props.handleclick}
            />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;