import React from 'react';
import Button from '../Buttons/index';
import { urls } from '../../urlsUtils';
import { useHistory } from 'react-router-dom';
import Logout from '../../Pages/Login/Logout';
import Burger_Queen02 from '../../Image/Burger_Queen02.png'
import './style.css';

const Header = () => {
  const history = useHistory();

  const exit = () => {
    Logout();
    history.push(urls.login.path);
  };

  return (
    <header className="header-hall-kitchen">
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
