import React, { useState, useEffect } from 'react';
import { firebaseStore } from '../../firebaseUtils';
import OrderCard from './CardPedidoPronto.js';
import Button from '../Buttons/index'
import Swal from 'sweetalert2';
import '../../reset.css';
import './style.css';

const PedidosProntos = () => {
  const [pedidosProntos, setPedidosProntos] = useState('');

  useEffect(() => {
    importarPedidosProntos();
  }, []);

  const importarPedidosProntos = () => {
    firebaseStore
      .collection('pedidos')
      .orderBy('timestamp', 'asc')
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
          <OrderCard obj={doc} cancelar={preventCancelar} idPedido={doc.pedido} ></OrderCard>
          <Button name="Finalizar" className="btn-finalizar" id={doc.pedido} onClick={prevent}/>
          </div>
        )});
        setPedidosProntos(pedidosArray);
      });
    }

    const prevent = (e) => {
      e.preventDefault();
      const id = e.currentTarget.id.toString();
      changeStatusFinalizado(id);
      importarPedidosProntos()
    }

    const preventCancelar = (e) => {
      e.preventDefault();
      const id = e.currentTarget.id.toString();
      changeStatusCancelado(id);
      importarPedidosProntos()
    }
    const changeStatusFinalizado = (id) => {
      firebaseStore.collection('pedidos').doc(id).update({
        status: 'Finalizado',
      });
    }
    
    const changeStatusCancelado = (id) => {
      firebaseStore.collection('pedidos').doc(id).update({
        status: 'Cancelado',
      })
      .then(Swal.fire("Pedido Cancelado"))
    }

  return (
    <div className="div-container-prontos">
      {pedidosProntos}
    </div>
  );
};

export default PedidosProntos;
