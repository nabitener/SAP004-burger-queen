import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthProvider from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(route) =>
        AuthProvider() !== false ? (
          <RouteComponent {...route} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  );
};

export default PrivateRoute;
