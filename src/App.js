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
import CreateTransaction from './component/TransactionPages/CreateTransaction/CreateTransaction';
import Personal from './component/Profile/Personal';
import NoTransactions from './component/TransactionPages/NoTransaction';
import WithTransaction from './component/TransactionPages/WithTransaction';
import Notifications from './component/notifications/Notifications';
import TransactionAccepted from './component/TransactionPages/TransactionAccepted';
import PsWithTransaction from './component/PaymentSettings/PsWithTransaction';
import PaymentSettings from './component/PaymentSettings/PaymentSettings';
import TransactionAccepteditems from './component/TransactionPages/TransactionAccepteditems';
import TransactionDeclined from './component/TransactionPages/TransactionDeclined';




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
        <Route path='frontend/acceptedterms' element={<TransactionAccepted />} />
        <Route path='frontend/accepteditems' element={<TransactionAccepteditems />} />
        <Route path='frontend/declined' element={<TransactionDeclined/>} />
        <Route path='frontend/profile' element={<Personal />} />
        <Route path='frontend/transaction' element={<NoTransactions />} />
        <Route path='frontend/transactions' element={<WithTransaction />} />
        <Route path='frontend/notifications' element={<Notifications />} />
        <Route path='frontend/paymentsettings' element={<PaymentSettings />} />
        <Route
          path='frontend/psWithTransaction'
          element={<PsWithTransaction />}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
