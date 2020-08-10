import React from 'react';
import './style.css';


const SmallCard = (props) => {
  
  function converTimeStamp() {
    let time = props.obj.timestamp.toDate();
    let timeConverted = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    return timeConverted;
  };
  
  return(
    <div  key= {props.obj.pedido} value={JSON.stringify(props.obj)} onClick={props.func} className='small-card'>
      <div className='small-card-title'>
        <p>Número do Pedido: {props.obj.pedido} </p>
      </div>
      <div className='small-card-content'>
        <p>Horário: {converTimeStamp()}</p>
        <p>Mesa: {props.obj.mesa}</p>
        <p>Cliente: {props.obj.cliente}</p>
      </div>
    </div>
  )
};

export default SmallCard;
