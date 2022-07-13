import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Footer from './component/Footer';
import Signup from './component/Signup/Signup';
import ForgotPassword from './component/LoginPage/ForgotPassword';
import ResetPassword from './component/LoginPage/ResetPassword';
import NoTransactions from './component/TransactionPages/NoTransaction';
import WithTransaction from './component/TransactionPages/WithTransaction';
import AcceptTerms from './component/TransactionDetails/AcceptTerms';

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
        <Route path='frontend/transaction' element={<NoTransactions />} />
        <Route path='frontend/transactions' element={<WithTransaction />} />
        <Route path='frontend/accept' element={<AcceptTerms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
