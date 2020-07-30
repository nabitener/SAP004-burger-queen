import React, { useState, useEffect } from 'react';
import Button from '../src/Components/Buttons/index';
import Input from '../src/Components/Inputs/index';
import { firebaseStore } from './firebaseUtils';
import './reset.css';
import './stylePedidos.css'

const Pedidos = () => {
  const [pedido, setPedido] = useState('0000');
  const [mesa, setMesa] = useState('');
  const [cliente, setCliente] = useState('');
  //const [total, setTotal] = useState('');

  useEffect(() => {}, [pedido, mesa, cliente]);

  const enviado = (pedido) => {
    let numeroPedido = parseInt(pedido + 1);
    return setPedido(numeroPedido);
  };

  const prevent = (event) => {
    event.preventDefault();
    novoPedido(pedido, mesa, cliente);
    enviado(pedido);
  };

  const novoPedido = (pedido, mesa, cliente) => {
    firebaseStore
      .collection('pedidos')
      .doc(pedido)
      .set({
        pedido: pedido,
        status: 'Aberto',
        mesa: mesa,
        cliente: cliente,
        //funcionário: name,
        timestamps: firebaseStore.Timestamp.fromDate(new Date())
          .toDate()
          .toLocaleString('pt-BR'),
      })
      .then(() => {
        alert('Pedido enviado com sucesso');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className="form-pedidos">
      <p>Pedido n°: {pedido}</p>
      <label>
        Mesa:
        <Input
          className="input-pedido"
          type="number"
          name={mesa}
          required
          onChange={(e) => setMesa(e.currentTarget.value)}
        />
      </label>
      <label>
        Cliente:
        <Input
          className="input-pedido"
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.currentTarget.value)}
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Total</th>
            <th>R$ </th>
          </tr>
        </tbody>
      </table>
      <Button className="btn-pedido" name="Enviar" onClick={prevent} />
    </form>
  );
};

export default Pedidos;
