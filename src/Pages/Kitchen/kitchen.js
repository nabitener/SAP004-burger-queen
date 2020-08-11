import React, { useState, useEffect } from 'react';
import { firebaseStore } from '../../firebaseUtils';
import Header from '../../Components/Header/Header';
import './style.css';
import '../../reset.css';
import Button from '../../Components/Buttons/index.js';
import CardCozinha from '../../Components/CardCozinha/CardCozinha';
import SmallCard from '../../Components/CardCozinha/SmallCard.js';

const Kitchen = () => {
  const [smallCards, setSmallCards] = useState([]);
  const [cards, setCards] = useState([])

  useEffect(() => {
    importarPedidosAbertos();
  }, []);

  // firebaseStore.collection('pedidos')
  //   .onSnapshot(() => importarPedidosAbertos());

  function selecionarPedido(e) {
    const dadosDoPedido = JSON.parse(e.currentTarget.getAttribute('value'));
    alert(JSON.stringify(dadosDoPedido));
  }

  function importarPedidosAbertos() {
    firebaseStore.collection('pedidos').orderBy('timestamp', 'asc').get()
      .then((resp) => {
        const filteredDocs = [];
        let docWithId = {};

        resp.docs.forEach((x) => {
          if (x.data().status === 'Aberto') {
            docWithId = x.data();
            docWithId = {...docWithId, ...{id: x.id}};
            filteredDocs.push(docWithId);
          }
        });

        const smallCardsArray=[];
        const cardsArray=[];

        filteredDocs.forEach((item,index) => {
          if (index <3) {
            cardsArray.push(<CardCozinha key={index} obj={item}></CardCozinha>)
          }
          else if(index >=3) {
            smallCardsArray.push(<SmallCard key={index} obj={item}></SmallCard>)
          }
        })

        setSmallCards(smallCardsArray);
        setCards(cardsArray);
      });
  }

  return (
    <main className="main-kitchen">
      <Header />
      <div className="all-area">
        <div className="list-orders">
          <div className="sub-header-container">
            <span className="sub-header-list">Lista de Pedidos</span>
          </div>
          <div className="container-small-cards">{smallCards}</div>
        </div>

        <div className="opened-order">
          <div className="sub-header">
            <span className="sub-header-title">Pedidos em Aberto</span>
            <Button className="btn-history" name="Histórico" />
          </div>

          <div className="order">
            <div className="container-big-card">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Kitchen;
