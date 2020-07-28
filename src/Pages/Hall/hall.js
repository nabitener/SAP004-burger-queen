import React, { useState, useEffect } from 'react';
import Button from '../../Components/Buttons/index';
import Logout from '../Login/Logout';
import { urls } from '../../urlsUtils';
import { useHistory } from 'react-router-dom';
import Pedidos from '../../Pedidos';
import { firebaseAuth, firebaseStore } from '../../firebaseUtils';
import Burger_Queen01 from '../../Image/Burger_Queen01.png';
import './style.css';
import '../../reset.css';

const Hall = () => {
  let [name, setName] = useState('nome');

  useEffect(() => {}, [name]);

  const history = useHistory();

  const exit = () => {
    Logout();
    history.push(urls.login.path);
  };

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
    <main className="main-hall-kitchen">
      <header className="header-hall-kitchen">
        <img src={Burger_Queen01} className="img-logo-hall-kitchen" alt="Logo"></img>
        <Button onClick={exit} type="submit" name="Sair" className="btn-logout-hall-kitchen" />
      </header>
      <p>Olá {name}</p>
      <Pedidos />
    </main>
  );
};

export default Hall;
