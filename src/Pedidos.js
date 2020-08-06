import React, { useState, useEffect } from 'react';
import Button from '../src/Components/Buttons/index';
import Input from '../src/Components/Inputs/index';
import { firebaseStore } from './firebaseUtils';
import Table from '../src/Components/Table/Table.js';
import './reset.css';
import './stylePedidos.css';

const Pedidos = (props) => {
  const [pedido, setPedido] = useState(100);
  const [mesa, setMesa] = useState('');
  const [cliente, setCliente] = useState('');
  //const [order, setOrder] = useState([]);
  const [total, setTotal] = useState("");

  useEffect(() => {console.log(total)}, [pedido, mesa, cliente, total]);
  useEffect(() => {
    console.log(props.newPedido)
    resultadoTotal(props.newPedido)
  }, [props.newPedido]);

  const enviado = (pedido) => {
    let numeroPedido = parseInt(pedido + 1);
    return setPedido(numeroPedido);
  };

  const prevent = (event) => {
    event.preventDefault();
    novoPedido(pedido, mesa, cliente);
    enviado(pedido);
  };

  function registrarPedido(){
    firebaseStore.collection('configurações').doc('último pedido').get()
    .then((resp) => { 
      setPedido(resp.data().número +1)
      firebaseStore.collection('configurações').doc('último pedido').update({
        'número': pedido
      })
      // .then(novoPedido(pedido, mesa,cliente))
    })
  }

  // registrarPedido();

  const novoPedido = (pedido, mesa, cliente) => {
    firebaseStore
      .collection('pedidos')
      .doc(pedido)
      .set({
        order: props.newPedido,
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

  const menos = (item, index) => {
    if( item[index].quantidade > 0) {
      item[index].quantidade --;
      console.log(item[index])  
    }else{
      item[index].quantidade = 0;
      excluir(item, index)
    } 
  }

  const mais = (item, index) => {
    item[index].quantidade ++;
    console.log(item[index]);
  };

  const excluir = (item, index) => {
    console.log("deletar")
    console.log(item.splice(index, 1))
    item.splice(index, 1)
  };

  const resultadoTotal = (order) => {
    let totalPedido = parseInt(0);
    order.map((element) => {
    return totalPedido += parseInt(element.priceItem)
    })
    setTotal(totalPedido)
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
          {props.newPedido.map((element, index) => (
            <Table
              key={element.nameItem + index}
              item={element.nameItem}
              quantidade={(element.quantidade)}
              handleClickMenos={() => {menos(props.newPedido, index)}}
              handleClickMais={() => {mais(props.newPedido, index)}}
              handleClickDelete={() => {excluir(props.newPedido, index)}}
              price={(element.priceItem) * element.quantidade}
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
