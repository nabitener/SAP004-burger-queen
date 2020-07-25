import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';
import '../../reset.css';
import { urls } from '../../urlsUtils';
import Input from '../../Components/Inputs/index';
import Button from '../../Components/Buttons/index';
import { firebaseAuth } from '../../firebaseUtils';
import { firebaseStore } from '../../firebaseUtils';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const history = useHistory();

  useEffect(() => {}, [name, email, password, service, history]);

  const prevent = (event) => {
    event.preventDefault();
    cadastrar(email, password, name, service);
  };

  const cadastrar = (email, password, name, service) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebaseStore
          .collection('users')
          .doc(firebaseAuth.currentUser.uid)
          .set({
            displayName: name,
            serviceArea: service,
            email: email,
            password: password,
            userId: firebaseAuth.currentUser.uid,
          });
      })
      .then(() => {
        if (service === 'Cozinha') {
          history.push(urls.kitchen.path);
        } else {
          history.push(urls.hall.path);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className="form-register">
      <p className="p-cadastro">Cadastro</p>
      <section className="section-input">
        <Input
          type="text"
          id="input-name"
          placeholder="Digite seu Nome"
          className="input-register"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
        />
        <Input
          type="email"
          id="input-email"
          placeholder="Digite o e-mail"
          className="input-register"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <Input
          type="password"
          id="input-password"
          placeholder="Digite uma senha"
          className="input-register"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <div className="div-input">
          <label htmlFor="input-area-cozinha">Cozinha</label>
          <Input
            type="radio"
            className="input-register-radio"
            id="input-area-cozinha"
            name="area"
            value="Cozinha"
            onChange={(e) => setService(e.currentTarget.value)}
            required
          />
          <label htmlFor="input-area-salao">Salão</label>
          <Input
            type="radio"
            id="input-area-salao"
            className="input-register-radio"
            name="area"
            value="Salão"
            onChange={(e) => setService(e.currentTarget.value)}
            required
          />
        </div>
      </section>
      <Button
        onClick={prevent}
        name="Cadastrar"
        className="btn-register"
        type="submit"
      />
      <br></br>
      <p className="p-voltar-login">
        Já possui cadastro? <Link to={urls.login.path}>Login</Link>
      </p>
    </form>
  );
};

export default Register;
