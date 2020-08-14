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
    getHistoryFilters ("Todos");
  }, []);

  function getHistoryFilters (options) {
    firebaseStore.collection('pedidos').orderBy('timestamp', 'desc').get()
    .then((resp) => {
      console.log("xxxxx");
      const filteredDocs = [];
      resp.docs.forEach((x) => {
        if (options == "Finalizado") {
          if (x.data().status === 'Finalizado') {
            filteredDocs.push(x.data());
          }
        }
        else if (options == "Cancelado") {
          if (x.data().status === 'Cancelado') {
            filteredDocs.push(x.data());
          }
        }
        else if (options == "Todos") {
          if (x.data().status === 'Cancelado' || x.data().status === 'Finalizado') {
            filteredDocs.push(x.data());
          }
        }
      });
      const cardsArray=[];
      filteredDocs.forEach((item,index) => {
        cardsArray.push(<CardHistory key={index} obj={item}></CardHistory>)
      })
      setCards(cardsArray);
    });
  }

  const prevent = (event) => {
    event.preventDefault();
    getHistoryFilters(event.currentTarget.value);
  };

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
            <div className='filter-area'>
              <select className='filter-by-type' onChange={prevent}>
                <option className='f-type' selected-disabled>Filtros</option>
                <option value='Todos' className='f-type'>Todos</option>
                <option value='Finalizado' className='f-type'>Finalizados</option>
                <option value='Cancelado' className='f-type'>Cancelados</option>
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