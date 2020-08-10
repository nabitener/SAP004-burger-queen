import React from 'react';
import './style.css';
import Button from '../Buttons';

const CardCozinha = (props) => {

  return (
    <div className="div-cozinha">
      <p className="numero-pedido">Pedido n°{props.dadosPedido.pedido}</p>
      <p className="mesa">Mesa: {props.dadosPedido.mesa}</p>
      <p className="cliente">Cliente: {props.dadosPedido.cliente}</p>
      <br></br>
      <ul className="lista">
        <li>
          {/*`${props.dadosPedido.quantidade} X ${props.dadosPedidos.item}`*/}
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
