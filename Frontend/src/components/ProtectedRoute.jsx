import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to the login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
