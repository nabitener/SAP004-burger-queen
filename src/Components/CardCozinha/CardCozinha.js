import React from 'react';
import './style.css';
import Button from '../Buttons';

const CardCozinha = (props) => {
  return (
    <div className="div-cozinha">
      <p className="numero-pedido">Pedido n°{props.numeroPedido}</p>
      <p className="mesa">Mesa: {props.mesa}</p>
      <p className="cliente">Cliente: {props.cliente}</p>
      <br></br>
      <ul className="lista">
        <li>
          {props.quantidade} X {props.item}
        </li>
      </ul>
      <br></br>
      <div className="div-btn">
      <Button className="btn-pronto" name="Pronto" value="Pronto" onClick={props.handleClick}/>
      </div>
    </div>
  );
};

export default CardCozinha;
