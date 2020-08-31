import React, { useState } from 'react';
import './style.css';
import Button from '../Buttons';

const Card = (props) => {
  const [opcao, setOpcao] = useState('');
  const [priceExtra, setPriceExtra] = useState('');

  return (
    <div id={props.idCard} className="classCard">
      <div className="container-item">
        <figure className="container-icons">
          <img
            className="class-icon"
            src={require('../../Image/Menu_Icons/' + props.name + '.png')}
            alt="icon-item"
          ></img>
        </figure>

        <div className="container-item-price-options">
          <div className="container-item-price">
            <span className="class-item">{props.name}</span>
            <span className="price">R$ {props.price}</span>
          </div>

          <div className="container-options-value-button">
            <div className="container-options-value">
              {props.options && (
                <select
                  className={['select', props.name].join(' ')}
                  onChange={(e) => setOpcao(e.currentTarget.value)}
                >
                  <option selected disabled>
                    Opções
                  </option>
                  {props.options.map((element) => (
                    <option value={element} key={props.name + element}>
                      {element}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="add-button-container">
              <Button
                name="Add"
                id={`${props.name}  ${opcao}`}
                value={props.price}
                className="add-button"
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
