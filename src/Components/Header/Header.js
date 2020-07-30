import React, { useState, useEffect } from 'react';
import { firebaseAuth, firebaseStore } from '../../firebaseUtils';
import Button from '../Buttons/index';
import { urls } from '../../urlsUtils';
import { useHistory } from 'react-router-dom';
import Logout from '../../Pages/Login/Logout';
import Burger_Queen02 from '../../Image/Burger_Queen02.png'
import './style.css';

const Header = () => {
  const [name, setName] = useState('');
  
  const history = useHistory();

  useEffect(() => {}, [name]);

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
  })

  return (
    <header className="header-hall-kitchen">
      <p className="name">{name}</p>
      <img
        src={Burger_Queen02}
        className="img-logo-hall-kitchen"
        alt="Logo"
      ></img>
      <Button
        onClick={exit}
        type="submit"
        name="Sair"
        className="btn-logout-hall-kitchen"
      />
    </header>
  );
};

export default Header;
