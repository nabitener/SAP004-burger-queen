import React, { useState, useEffect } from 'react';
import { firebaseStore } from '../../firebaseUtils';
import Header from '../../Components/Header/Header';
import './style.css';
import '../../reset.css';
import Button from '../../Components/Buttons/index.js';
import CardHistory from '../../Components/CardHistory/CardHistory';
import { useHistory} from 'react-router-dom';
import { urls } from '../../urlsUtils';

const History = () => {
  const [cards, setCards] = useState([])
  const history = useHistory();

  useEffect(() => {
    getHistory();
  }, []);

  // firebaseStore.collection('pedidos')
  //   .onSnapshot(() => importarPedidosAbertos());

  function getHistory() {
    firebaseStore.collection('pedidos').orderBy('timestamp', 'desc').get()
      .then((resp) => {
        const filteredDocs = [];
        let docWithId = {};
        resp.docs.forEach((x) => {
          if (x.data().status === 'Finalizado') {
            docWithId = x.data();
            docWithId = {...docWithId, ...{id: x.id}};
            filteredDocs.push(docWithId);
          }
        });
        const cardsArray=[];
        filteredDocs.forEach((item,index) => {
          cardsArray.push(<CardHistory key={index} obj={item}></CardHistory>)
        })
        setCards(cardsArray);
      });
  }

  return (
    <main className='main-history'>
        <Header/>
        <div className='all-area-history'>
          <div className='history-top'>

            <div className='history-header'>
              <div className='header-left'>

              </div>
              <div className='header-center'>
                <label className='history-title'>Histórico</label>
              </div>
              
              <div className='header-right'>
                <Button 
                  className="btn-kitchen"
                  name="Voltar" 
                  onClick = {() => history.push(urls.kitchen.path)}>
                </Button>
              </div>

            </div>
            <div className='filters-area'>
              <select className='filter-by-day'>
                <option className='d-type' selected-disabled>Filtro por Dia</option>
                <option className='d-type'>Todos</option>
                <option className='d-type'>Hoje</option>
                <option className='d-type'>Essa Semana</option>
              </select>
              <select className='filter-by-type'>
                <option className='f-type' selected-disabled>Tipo de Filtro</option>
                <option className='f-type'>Todos</option>
                <option className='f-type'>Finalizados</option>
                <option className='f-type'>Cancelados</option>
              </select>
            </div>
          </div>
          <div className='cards-area'>
            {cards}
          </div>
        </div>
    </main> 
  )
};

export default History;