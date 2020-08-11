import React, { useState, useEffect } from 'react';
import Button from '../Buttons/index';
import Input from '../Inputs/index';
import { firebaseStore } from '../../firebaseUtils';
import Table from '../Table/Table';
import '../../reset.css';
import './style.css';

const Pedidos = (props) => {
  const [mesa, setMesa] = useState('');
  const [cliente, setCliente] = useState('');

  useEffect(() => {
  }, [mesa, cliente, props.newPedido]);

  const prevent = (event) => {
    event.preventDefault();
    if(mesa === ""){
      alert("Preencha o número da mesa")
    }else{
    registrarPedido();
    setMesa(0);
    setCliente('');
  }};

  const novoPedido = (pedidoNumero, mesa, cliente) => {
    const numero = pedidoNumero.toString();
    firebaseStore
      .collection('pedidos')
      .doc(numero)
      .set({
        pedido: pedidoNumero,
        order: props.newPedido,
        status: 'Aberto',
        mesa: mesa,
        cliente: cliente,
        timestamp: new Date(),
      })
      .then(() => {
        alert('Pedido enviado com sucesso');
      })
      .catch((error) => {
          alert(error.message)
      });
  };
  const registrarPedido = () => {
    let pedidoNumero = 100;
   firebaseStore.collection('configurações').doc('último pedido').get()
   .then((resp) => { 
     pedidoNumero = resp.data().número +1
     firebaseStore.collection('configurações').doc('último pedido').update({
       'número': pedidoNumero
     })
     .then(novoPedido(pedidoNumero, mesa, cliente))
   })
 };

  return (
    <form className="form-pedidos">
      <p className="p-pedidos">Pedido</p>
      <div className="div-mesa-cliente">
        <label className="label-input">
          Mesa:
          <Input
            className="input-pedido"
            type="number"
            name={mesa}
            onChange={(e) => setMesa(e.currentTarget.value)}
            min="0"
            max="1000"
          />
        </label>
        <label className="label-input">
          Cliente:
          <Input
            className="input-pedido cliente"
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.currentTarget.value)}
          />
        </label>
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props.newPedido.map((element, index) => (
            <Table
              key={element.nameItem + index}
              item={element.nameItem}
              quantidade={element.quantidade}
              handleClickMenos={() => {
                props.subtrair(props.newPedido, index);
              }}
              handleClickMais={() => {
                props.soma(props.newPedido, element.nameItem);
              }}
              handleClickDelete={() => {
                props.delete(props.newPedido, element.nameItem);
              }}
              price={element.priceItem * element.quantidade}
            />
          ))}
        </tbody>
      </table>
      <br></br>
      <p className="total">Total  R$ {props.total}</p>
      <br></br>
      <Button className="btn-pedido" name="Enviar" onClick={prevent} />
    </form>
  );
};

export default Pedidos;
