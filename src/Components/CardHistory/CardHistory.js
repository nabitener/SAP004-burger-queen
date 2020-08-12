import React, { useState , useEffect} from 'react';
import './style.css';
import { firebaseStore } from '../../firebaseUtils';

const CardHistory = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {getOrders()}, []);

  function converTimeStamp() {
    let time = props.obj.timestamp.toDate();
    let dateConverted = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
    let timeConverted = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    return dateConverted + ' - ' + timeConverted;
  };
 
  function getOrders(){
    const orders = [];
    props.obj.order.forEach((orderItem, index) => {
      orders.push(
      <tr key={index} className='table-row'> 
        <td key={0} className='table-cell-qtd'>{orderItem.quantidade} </td>
        <td key={1} className='table-cell-item'>{orderItem.nameItem} </td>
      </tr>
      )
    })
    setItems(orders);
  }

  return (
    <div className="div-card">
      <p key={0} className="numero-pedido">Pedido n° {props.obj.pedido}</p>
      <span key={1} className="mesa">Horário: {converTimeStamp()}</span><br></br>
      <span key={2} className="mesa">Mesa: {props.obj.mesa}</span><br></br>
      <span key={3} className="cliente">Cliente: {props.obj.cliente}</span>
      <br></br><br></br>
      <table>
        <thead>
          <tr className='table-header'>
            <th key={0}>Qtd.</th>
            <th key={1}>Item</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
      <br></br>
    </div>
  );
};

export default CardHistory;
