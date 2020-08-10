import React, { useState, useEffect } from 'react';
import { firebaseStore } from '../../firebaseUtils';
import SmallCard from '../../Components/CardCozinha/SmallCard.js';
//import CardCozinha from '../../Components/CardCozinha/CardCozinha';
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
          return <SmallCard obj={doc}></SmallCard>;
        });
        setPedidosProntos(pedidosArray);
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
