import React, { useState, useEffect } from 'react';
import Pedidos from '../../Pedidos';
import { firebaseAuth, firebaseStore } from '../../firebaseUtils';
import './style.css';
import '../../reset.css';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Inputs';

const Hall = () => {
  const [name, setName] = useState('nome');
  const [cafe, setCafe] = useState(true);
  const [tarde, setTarde] = useState(false);

  useEffect(() => {}, [name]);

  firebaseAuth.onAuthStateChanged((user) => {
    if (user != null) {
      const userId = firebaseAuth.currentUser.uid;
      firebaseStore
        .collection('users')
        .doc(userId)
        .get()
        .then((doc) => {
          const nomeFuncionario = doc.data().displayName;
          return setName(nomeFuncionario);
        });
    }
  });

  return (
    <main className="main-hall">
      <Header />
      <p>Olá {name}</p>
      <div className="tabs-container">
        <Input
          type="radio"
          name="menu"
          className="tabs"
          id="tab1"
          value="cafe"
          checked={(cafe === true)}
          onChange={() => setCafe(!cafe)}
        />
        <label htmlFor="tab1">Café da Manhã</label>
        <div>Café da Manhã</div>
        <Input
          type="radio"
          name="menu"
          className="tabs"
          id="tab2"
          value="tarde"
          checked={(tarde === true)}
          onChange={() => setTarde(!tarde)}
        />
        <label htmlFor="tab2">Almoço e Jantar</label>
        <div>Almoço e Jantar</div>
      </div>
      <Pedidos />
    </main>
  );
};

export default Hall;
