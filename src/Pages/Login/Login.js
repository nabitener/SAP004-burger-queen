import React, { useState } from 'react';
import Button from '../../Components/Buttons/index.js';
import Input from '../../Components/Inputs/index.js';
import { firebaseAuth } from '../../firebaseUtils';
import { firebaseStore } from '../../firebaseUtils';
import { useHistory, Link } from 'react-router-dom';
import { urls } from '../../urlsUtils';
import Burger_Queen01 from '../../Image/Burger_Queen01.png';
import './style.css';
import '../../reset.css';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const history = useHistory();

  function userStatus() {
    const userId = firebaseAuth.currentUser.uid;
    firebaseStore
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.data().serviceArea === 'Salão') {
          history.push(urls.hall.path);
        } else {
          history.push(urls.kitchen.path);
        }
      })
      .catch((error) => {
        alert(error.message);
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
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const showPass = () => {
    let tipo = document.querySelector('#input-password');
    if (tipo.type === 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  };

  return (
    <main className="main-login">
      <figure className="figure-login">
        <img src={Burger_Queen01} alt="Logo" className="logo-login"></img>
      </figure>
      <form className="form-login" method="POST">
        <div className="welcome-container-login">
          <h2 className="welcome-message">Bem Vindo à Burger Queen!</h2>
        </div>
        <div className="div-input-login">
          <Input
            type="text"
            id="input-email"
            className={'input-login'}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <div className="div-password">
            <Input
              type="password"
              id="input-password"
              className={'input-login'}
              placeholder="Digite sua senha"
              value={pass}
              onChange={(e) => setPass(e.currentTarget.value)}
              required
            />
              <img
                src="http://i.stack.imgur.com/H9Sb2.png"
                className="eyes"
                alt="Olho"
                onClick={showPass}
              ></img>
           </div>
        </div>
        <Button
          id="submit-button"
          onClick={loginCall}
          name="Entrar"
          className="btn-login"
        />
        <p className="login-message">
          Não tem registro?{' '}
          <Link to={urls.register.path} className="link-register">
            Registre-se!
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
