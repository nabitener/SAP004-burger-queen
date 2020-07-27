import React, { useState } from 'react';
import Button from '../../Components/Buttons/index.js';
import Input from '../../Components/Inputs/index.js';
import { firebaseAuth } from '../../firebaseUtils';
import { firebaseStore } from '../../firebaseUtils';
import { useHistory, Link } from 'react-router-dom';
import { urls } from '../../urlsUtils';
import './style.css';
import '../../reset.css';


function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  const history = useHistory();

  firebaseAuth.onAuthStateChanged(function (user) {
    if (user) {
      setUserName(user.displayName);
      setUserId(user.uid);
      console.log(userId);
      console.log(userName);
    } else {
      setUserName('');
      setUserId('');
    }
  });

  function userStatus() {
    const userId = firebaseAuth.currentUser.uid;
    firebaseStore
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => {
        console.log(doc.data().serviceArea);
        if (doc.data().serviceArea === 'Salão') {
          history.push(urls.hall.path);
        } else {
          history.push(urls.kitchen.path);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function loginCall(e) {
    e.preventDefault();
    signIn(email, pass);
  }

  function signIn(email, pass) {
    firebaseAuth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        userStatus();
        console.log('OK');
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <>
    <img src="../../Image/Burger_Queen01.png" alt="Logo"></img>
    <form className="form-login">
      <div className="welcome-container-login">
        <h2 className="welcome-message">Bem Vindo à Burger Queen!</h2>
        <h2 className="welcome-message">Login</h2>
      </div>
      <Input
        type="text"
        id="input-email"
        className={'input-login'}
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />

      <Input
        type="password"
        id="input-password"
        className={'input-login'}
        placeholder="Digite sua senha"
        value={pass}
        onChange={(e) => setPass(e.currentTarget.value)}
        required
      />
      <div className="container-button-message">
        <Button id="submit-button" onClick={loginCall} name="Entrar" />
        <p className="login-message">
          Não tem registro? <Link to={urls.register.path}>Registre-se!</Link>
        </p>
      </div>
    </form>
    </>
  );
}

export default Login;
