import React, { useState, useEffect } from 'react';
import { firebaseAuth } from '../../firebaseUtils';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
