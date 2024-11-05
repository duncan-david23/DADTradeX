import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import BlognNews from './pages/BlognNews.jsx';
import Cryptocurrencies from './pages/Cryptocurrencies.jsx';
import Market from './pages/Market.jsx';
import CryptoPage from './pages/cryptoPage.jsx';
import StockPage from './pages/StockPage.jsx';
import toast, { Toaster } from 'react-hot-toast';
import SettingsModal from './components/SettingsModal'
import SupportModal from './components/SupportModal'
import { dataContext } from './contexts/OtherContexts'
import GiftClaimModal from './components/GiftClaimModal.jsx';

const App = () => {

  const {dataValues} = useContext(dataContext);
  const {displaySettingsModal, displaySupportModal, setDisplaySettingsModal, giftClaimModal} = dataValues;


  


  return (
      <>
          <Toaster />
          {displaySettingsModal &&  <SettingsModal/> }
          {displaySupportModal && <SupportModal /> }
          {giftClaimModal &&  <GiftClaimModal /> }
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlognNews />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dashboard/:id/c-details/:id" element={<CryptoPage />} />
          <Route path="/dashboard/:id/s-details/:id" element={<StockPage />} />
          
          {/* Protect the dashboard route */}
          <Route path="/dashboard/:id" element={<ProtectedRoute element={<Dashboard />} />} />
          
        </Routes>
      </Router>
      
    
    </>
  );
};

export default App;
