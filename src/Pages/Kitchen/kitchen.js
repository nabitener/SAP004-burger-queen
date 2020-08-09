import React, { useState, useEffect }from 'react';
import { firebaseStore } from '../../firebaseUtils';
import Header from '../../Components/Header/Header';
import './style.css';
import '../../reset.css';
import Button from '../../Components/Buttons/index.js';
import CardCozinha from '../../Components/CardCozinha/CardCozinha';
import SmallCard from '../../Components/CardCozinha/SmallCard.js';

const Kitchen = () => {
  const [pedidosAbertos, setPedidosAbertos] = useState([]);
  const [pedidoDetalhado, setPedidoDetalhado] = useState({cliente:'',mesa:'',order:[], pedido:'',status:'',timestamp:''});

  useEffect(() => {importarPedidosAbertos()},[]);
  
  function selecionarPedido(e) {
    const dadosDoPedido = JSON.parse(e.currentTarget.getAttribute('value'))
    alert(JSON.stringify(dadosDoPedido))
  }

  function importarPedidosAbertos() {
    firebaseStore.collection('pedidos').orderBy('timestamp', 'asc').get()
    .then((resp) => { 
      const filteredDocs = []
      resp.docs.forEach((x) => {
        if (x.data().status === 'Aberto') {filteredDocs.push(x.data())}
      })
      const pedidosArray = filteredDocs.map((doc) => {
        return <SmallCard func={selecionarPedido} obj={doc}></SmallCard>
      })
      setPedidosAbertos(pedidosArray)
    })
  }

  return (
    <main className="main-kitchen">
      <Header />
      <div className='all-area'>
        
        <div className='list-orders'>
          
          <div className='sub-header-container'>
            <span className='sub-header-list'>Lista de Pedidos</span>
          </div>
          <div className='container-small-cards'>
            {pedidosAbertos}
          </div>
        </div>
        
        <div className='opened-order'>
          
          <div className='sub-header'>
            <span className='sub-header-title'>Pedidos em Aberto</span>
            <Button 
              className='btn-history'
              name='Histórico'
            />
          </div>

          <div className='order'>
            <div className='container-big-card'>
              <CardCozinha dadosPedido={pedidoDetalhado} />
              {/* <CardCozinha /> */}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Kitchen;
