import React from 'react';
import './style.css';
import Button from '../Buttons';
// import Buttom from '../Buttons/index';


const OrderCard = (props) => {
  
  function converTimeStamp() {
    let time = props.obj.timestamp.toDate();
    let timeConverted = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    return timeConverted;
  };
  
  return(
    <div  key= {props.obj.pedido} value={JSON.stringify(props.obj)} onClick={props.func} className='order-card'>
      <div className='order-card-title'>
        <p className="p-hall">Pedido n° {props.obj.pedido} </p>
        <Button className="a-cancelado-hall" name="X" value="Cancelado" id={props.idPedido} onClick={props.cancelar}/>
      </div>
      <div className='order-card-content'>
        <p>Horário: {converTimeStamp()}</p>
        <p>Mesa: {props.obj.mesa}</p>
        <p>Cliente: {props.obj.cliente}</p>
      </div>
    </div>
  )
};

export default OrderCard;
