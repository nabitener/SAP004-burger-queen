import React from 'react';
import Button from '../../Components/Buttons/index';
import Logout from '../Login/Logout';
import { urls } from '../../urlsUtils';
import { useHistory } from 'react-router-dom';

const Kitchen = () => {
  const history = useHistory();

  const exit = () => {
    Logout();
    history.push(urls.login.path);
  };

  return (
    <div>
      <p>Olá cozinha!</p>
      <Button onClick={exit} type="submit" name="Logout" />
    </div>
  );
};

export default Kitchen;
