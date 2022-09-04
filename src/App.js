import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './component/Blog/Blog';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Signup from './component/Signup/Signup';
import ForgotPassword from './component/LoginPage/ForgotPassword';
import ResetPassword from './component/LoginPage/ResetPassword';
import AcceptTerms from './component/TransactionDetails/AcceptTerms';
import CreateTransaction from './component/TransactionPages/CreateTransaction/CreateTransaction';
import Protected from './component/ProtectedRoute/Protected';

// import MyTransBuyer from './component/TransactionPages/MyTransaction/MyTransaction_Buyer';
// import TransBuyer from './component/TransactionPages/MyTransaction/MyTransaction_Buyer';
// import TransBuyer from './component/TransactionPages/MyTransaction/MyTransaction_Buyer';

import MyTransBuyer from './component/TransactionPages/MyTransaction/MyTransaction_Buyer';

import ProvideWallet from './component/TransactionPages/MyTransaction/ProvideWallet';
import TransBuyerCrypto from './component/TransactionPages/MyTransaction/MyTransaction_Buyer-Crypto';
import GeneralSettings from './component/GeneralSettings/GeneralSettings';
import Personal from './component/Profile/Personal';
import NoTransactions from './component/TransactionPages/NoTransaction';
import WithTransaction from './component/TransactionPages/WithTransaction';
// import TransSeller from './component/TransactionPages/Transaction/TransSeller';
// import TransBuyer from './component/TransactionPages/Transaction/TransBuyer';
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
      <Routes>
        <Route path='/blog' element={<Blog />} />
        <Route path='/aboutUs' element={<AboutPage />} />
        <Route path='frontend/acceptterms' element={<AcceptTerms />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create' element={<CreateTransaction />} />
        <Route path='/acceptedterms' element={<TransactionAccepted />} />
        <Route path='/accepteditems' element={<TransactionAccepteditems />} />
        <Route path='/declined' element={<TransactionDeclined />} />
        <Route path='/paymethod' element={<PaymentMethod />} />
        <Route path='/transaction' element={<NoTransactions />} />
        <Route path='/transactions' element={<WithTransaction />} />
        <Route path='/transbuyer' element={<TransBuyer />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/accountsetting' element={<Accountsetting />}>
          <Route path='general' element={<GeneralSettings />} />
          <Route path='profile' element={<Personal />} />
          <Route path='paymentsetting' element={<PaymentSettings />} />
        </Route>
        <Route path='/mytransactions' element={<TransBuyer />} />
        <Route path='/mytransactions' element={<MyTransBuyer />} />
        <Route path='/mytransactions/wallet' element={<ProvideWallet />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/mytransactions-crypto' element={<TransBuyerCrypto />} />
      </Routes>
    </>
  );
}

export default App;
