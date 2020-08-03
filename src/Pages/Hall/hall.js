import React, { useState } from 'react';
import Pedidos from '../../Pedidos';
import './style.css';
import '../../reset.css';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Inputs';
// import MenuCards from './MenuCards.jsx';
import firebaseStore from '../../firebaseUtils.js';

const Hall = () => {
  const [cafe, setCafe] = useState(true);
  const [tarde, setTarde] = useState(false);


  const [menu, setMenu] = useState(null);
  const [menuCafe, setMenuCafe] = useState(null);
  const [menuDia, setMenuDia] = useState(null);

  const createMenuCafe = e => {
    e.preventDefault();
    setMenu('createMenuCafe');
    firebaseStore.collection('menu').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => setMenuCafe(doc.data()));
    });
  }

  const createMenuDia = e => {
    e.preventDefault();
    setMenu('createMenuDia');
    firebaseStore.collection('menu').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => setMenuDia(doc.data()));
    });
  }

  console.log(createMenuCafe());
  console.log(createMenuDia());

  // MenuCards().then((x) => console.log(x))

  return (
    <main className="main-hall">
      <Header />
      <div className="div-hall">
        <div className="tabs-container">
          <Input
            type="radio"
            name="menu"
            className="tabs"
            id="tab1"
            value="cafe"
            checked={cafe === true}
            onChange={() => setCafe(!cafe)}
          />
          <label className="label" htmlFor="tab1">Café da Manhã</label>
          <div className="div-conteudo">Café da Manhã
            {/* {MenuCards('Café da Manhã').then((x) => x)} */}
            {/* {MenuCards()} */}
          </div>
          <Input
            type="radio"
            name="menu"
            className="tabs"
            id="tab2"
            value="tarde"
            checked={tarde === true}
            onChange={() => setTarde(!tarde)}
          />
          <label className="label" htmlFor="tab2">Almoço e Jantar</label>
          <div className="div-conteudo">Almoço e Jantar
            {/* {MenuCards('Almoço e Jantar').then((x) => x)} */}
            {/* {MenuCards()} */}
          </div>
        </div>
        <Pedidos />
      </div>
    </main>
  );
};

export default Hall;
