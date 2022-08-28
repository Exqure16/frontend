import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Blog from './component/Blog/Blog';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Signup from './component/Signup/Signup';
import ForgotPassword from './component/LoginPage/ForgotPassword';
import ResetPassword from './component/LoginPage/ResetPassword';
import AcceptTerms from './component/TransactionDetails/AcceptTerms';
import CreateTransaction from './component/TransactionPages/CreateTransaction/CreateTransaction';

import MyTransBuyer from './component/TransactionPages/MyTransaction/MyTransaction_Buyer';
import TransBuyerCrypto from './component/TransactionPages/MyTransaction/MyTransaction_Buyer-Crypto';
import GeneralSettings from './component/GeneralSettings/GeneralSettings';
import Personal from './component/Profile/Personal';
import NoTransactions from './component/TransactionPages/NoTransaction';
import WithTransaction from './component/TransactionPages/WithTransaction';
import TransSeller from './component/TransactionPages/Transaction/TransSeller';
import TransBuyer from './component/TransactionPages/Transaction/TransBuyer';
import Notifications from './component/notifications/Notifications';
import TransactionAccepted from './component/TransactionPages/TransactionAccepted';
import PaymentSettings from './component/PaymentSettings/PaymentSettings';
import TransactionAccepteditems from './component/TransactionPages/TransactionAccepteditems';
import TransactionDeclined from './component/TransactionPages/TransactionDeclined';
import Accountsetting from './component/Accountsetting/Accountsetting';
import PaymentMethod from './component/PaymentSettings/PaymentMethod';
import AboutPage from './component/AboutPage/AboutPage';
import ContactUs from './component/ContactUsPage/ContactUs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='frontend/blog' element={<Blog />} />
        <Route path='frontend/aboutUs' element={<AboutPage />} />
        <Route path='frontend/acceptterms' element={<AcceptTerms />} />
        <Route path='/frontend' element={<HomePage />} />
        <Route path='frontend/login' element={<Login />} />
        <Route path='frontend/forgot' element={<ForgotPassword />} />
        <Route path='frontend/reset' element={<ResetPassword />} />
        <Route path='frontend/signup' element={<Signup />} />
        <Route path='frontend/create' element={<CreateTransaction />} />
        <Route
          path='frontend/acceptedterms'
          element={<TransactionAccepted />}
        />
        <Route
          path='frontend/accepteditems'
          element={<TransactionAccepteditems />}
        />
        <Route path='frontend/declined' element={<TransactionDeclined />} />
        <Route path='frontend/paymethod' element={<PaymentMethod />} />
        <Route path='frontend/transaction' element={<NoTransactions />} />
        <Route path='frontend/transactions' element={<WithTransaction />} />
        <Route path='frontend/transbuyer' element={<TransBuyer />} />
        <Route path='frontend/transseller' element={<TransSeller />} />
        <Route path='frontend/notifications' element={<Notifications />} />
        <Route path='frontend/accountsetting' element={<Accountsetting />}>
          <Route path='general' element={<GeneralSettings />} />
          <Route path='profile' element={<Personal />} />
          <Route path='paymentsetting' element={<PaymentSettings />} />
        </Route>
        <Route path='frontend/mytransactions' element={<MyTransBuyer />} />
        <Route path='frontend/contactus' element={<ContactUs />} />
        <Route
          path='frontend/mytransactions-crypto'
          element={<TransBuyerCrypto />}
        />
      </Routes>
    </>
  );
}

export default App;
