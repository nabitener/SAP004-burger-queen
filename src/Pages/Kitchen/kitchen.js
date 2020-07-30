import React, {useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { firebaseAuth, firebaseStore } from '../../firebaseUtils';
import './style.css';
import '../../reset.css';

const Kitchen = () => {
  const [name, setName] = useState('nome');

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
    <main className="main-kitchen">
      <Header />
      <p>Olá {name}!</p>
    </main>
  );
};

export default Kitchen;
