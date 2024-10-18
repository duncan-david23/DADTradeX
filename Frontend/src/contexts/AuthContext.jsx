import React, { createContext, useState, useContext } from 'react';

// Create a Context for the auth state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // You can manage authentication with tokens or other methods here
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);
