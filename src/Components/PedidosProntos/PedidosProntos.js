import React, { useState, useEffect } from 'react';
import { firebaseStore } from '../../firebaseUtils';
import OrderCard from './CardPedidoPronto.js';
import Button from '../Buttons/index'
import '../../reset.css';
import './style.css';

const PedidosProntos = () => {
  const [pedidosProntos, setPedidosProntos] = useState('');
  /*const [pedidoDetalhado, setPedidoDetalhado] = useState({
    cliente: '',
    mesa: '',
    order: [],
    pedido: '',
    status: '',
    timestamp: '',
  });*/

  useEffect(() => {
    importarPedidosProntos();
  }, []);

  const importarPedidosProntos = () => {
    firebaseStore
      .collection('pedidos')
      .orderBy('timestamp', 'desc')
      .get()
      .then((resp) => {
        const filteredDocs = [];
        resp.docs.forEach((x) => {
          if (x.data().status === 'Pronto') {
            filteredDocs.push(x.data());
          }
        });
        const pedidosArray = filteredDocs.map((doc) => {
          return( 
          <div className="card-pedido-pronto" key={doc.pedido}>
          <OrderCard obj={doc} ></OrderCard>
          <Button name="Finalizar" className="btn-finalizar" id={doc.pedido} onClick={prevent}/>
          </div>
        )});
        setPedidosProntos(pedidosArray);
      });
    }

    const prevent = (e) => {
      e.preventDefault();
      console.log('clicou')
      const id = e.currentTarget.id.toString();
      changeStatus(id);
      importarPedidosProntos()
    }

    const changeStatus = (id) => {
      firebaseStore.collection('pedidos').doc(id).update({
        status: 'Finalizado',
      });
    }
    
  /*const mostrarItens = () => {
    let array =[];
    pedidosProntos.map((doc) => {[
    pedidoDetalhado.cliente= doc.cliente,
    pedidoDetalhado.mesa= doc.mesa,
    pedidoDetalhado.order= doc.order,
    pedidoDetalhado.pedido= doc.pedido,
    pedidoDetalhado.status= doc.status,
    pedidoDetalhado.timestamp= doc.timestamp,
    ]}
    );
    return setPedidoDetalhado(array);
}*/

  return (
    <div>
      {pedidosProntos}
    </div>
  );
};

export default PedidosProntos;
