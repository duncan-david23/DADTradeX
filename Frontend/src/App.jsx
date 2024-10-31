import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { DataContextProvider } from './contexts/OtherContexts.jsx';
import BlognNews from './pages/BlognNews.jsx';
import Cryptocurrencies from './pages/Cryptocurrencies.jsx';
import Market from './pages/Market.jsx';
import IndPage from './pages/IndPage.jsx';


const App = () => {
  return (
    <DataContextProvider>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlognNews />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dashboard/:id/i-details/:id" element={<IndPage />} />
          
          {/* Protect the dashboard route */}
          <Route path="/dashboard/:id" element={<ProtectedRoute element={<Dashboard />} />} />
          
        </Routes>
      </Router>
      
    </AuthProvider>
    </DataContextProvider>

  );
};

export default App;
