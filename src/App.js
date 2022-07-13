import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// <<<<<<< HEAD
import Header from './component/Header/Header';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Footer from './component/Footer';
import Signup from './component/Signup/Signup';
import ForgotPassword from './component/LoginPage/ForgotPassword';
import ResetPassword from './component/LoginPage/ResetPassword';
import CreateTransaction from './component/TransactionPages/CreateTransaction/CreateTransaction';
import Personal from './component/Profile/Personal';
import NoTransactions from './component/TransactionPages/NoTransaction';
import WithTransaction from './component/TransactionPages/WithTransaction';
import Notifications from './component/notifications/Notifications';
import TransactionAccepted from './component/TransactionPages/TransactionAccepted';


function App() {
  return (
    <div>
      <Header />
       <Routes>
        <Route path='frontend/' element={<HomePage />} />
        <Route path='frontend/login' element={<Login />} />
        <Route path='frontend/forgot' element={<ForgotPassword />} />
        <Route path='frontend/reset' element={<ResetPassword />} />
        <Route path='frontend/signup' element={<Signup />} />

        <Route path='frontend/create' element={<CreateTransaction />} />
        <Route path='frontend/accepted' element={<TransactionAccepted />} />
        <Route path='frontend/profile' element={<Personal />} />
        <Route path='frontend/transaction' element={<NoTransactions />} />
        <Route path='frontend/transactions' element={<WithTransaction />} />
        <Route path='frontend/notification' element={<Notifications />} />

      
     

      </Routes> 
       <Footer />
     
    </div>
  );
}

export default App;
