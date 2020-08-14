import React, { useState , useEffect} from 'react';
import './style.css';
import Button from '../Buttons';
import { firebaseStore } from '../../firebaseUtils';
import Swal from 'sweetalert2';

const CardCozinha = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {getOrders()}, []);

  function pedidoPronto() {
    firebaseStore.collection('pedidos').doc(props.obj.id).update({
      status: "Pronto"
    })
    .then(props.func)
  }
  
  const pedidoCancelado = () => {

    firebaseStore.collection('pedidos').doc(props.obj.id).update({
      status: "Cancelado"
    })
    .then(props.func)
    .then(Swal.fire("Pedido Cancelado")
    );
  } 

  function getOrders(){
    const orders = [];
    props.obj.order.forEach((orderItem, index) => {
      orders.push(
      <tr key={index} className='table-rowEven'> 
        <td key={0} className='table-cell-qtd'>{orderItem.quantidade} </td>
        <td key={1} className='table-cell-item'>{orderItem.nameItem} </td>
      </tr>
      )
    })
    setItems(orders);
  }

  return (
    <div className="div-cozinha">
      <div className="div-pedido-cancelar numero-pedido">
      <p key={0} className="p-pedido">Pedido n° {props.obj.pedido}</p>
      <Button className="a-cancelado" name="X" value="Cancelado" onClick={pedidoCancelado}/>
      </div>
            
      <span key={1} className="mesa">Mesa: {props.obj.mesa}</span><br></br>
      <span key={2} className="cliente">Cliente: {props.obj.cliente}</span>
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
      <div className="div-btn">
        <Button className="btn-pronto" name="Pronto" value="Pronto" onClick={pedidoPronto}/>
      </div>
    </div>
  );
};

export default CardCozinha;
