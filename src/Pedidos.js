import React, { useState, useEffect } from 'react';
import Button from '../src/Components/Buttons/index';
import Input from '../src/Components/Inputs/index';
import { firebaseStore } from './firebaseUtils';
import Table from '../src/Components/Table/Table.js';
import './reset.css';
import './stylePedidos.css';

const Pedidos = (props) => {
  const [pedido, setPedido] = useState('0000');
  const [mesa, setMesa] = useState('');
  const [cliente, setCliente] = useState('');
  const [quant, setQuant] = useState('1');
  //const [listItens, setListItens] = useState([]);
  const [total, setTotal] = useState("0");

  useEffect(() => {}, [pedido, mesa, cliente, total]);

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

  const menos = () => {
    let sub = parseInt(quant)-parseInt(1);
    if( sub < 0) {
      setQuant(0)
    }else{
      setQuant(sub);
    }    
  }

  const mais = () => {
    setQuant(parseInt(quant)+parseInt(1))
  };

  const excluir = () => {
    
  };

  const resultadoTotal = () => {
    let result = parseInt(quant)*parseInt(props.newPedido.priceItem);
    setTotal(result);
  }
  

  return (
    <form className="form-pedidos">
      <p className="p-pedidos">Pedido n°: {pedido}</p>
      <div className="div-input">
        <label className="label-input">
          Mesa:
          <Input
            className="input-pedido"
            type="number"
            name={mesa}
            required
            onChange={(e) => setMesa(e.currentTarget.value)}
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
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Adicional</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props.newPedido.map((element) => (
            <Table
              item={element.nameItem}
              quantidade={quant}
              handleClickMenos={menos}
              handleClickMais={mais}
              handleClickDelete={excluir}
              price={element.priceItem}
            />
          ))}
          <tr>
          <th>Total R$ {total}</th>
          </tr>
        </tbody>
      </table>

      <Button className="btn-pedido" name="Enviar" onClick={prevent} />
    </form>
  );
};

export default Pedidos;
