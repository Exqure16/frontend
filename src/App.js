import React from 'react';

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Comingsoon from './component/Comingsoon/Comingsoon';

import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Footer from './component/Footer';
import Signup from './component/Signup/Signup';
import ForgotPassword from './component/LoginPage/ForgotPassword';
import ResetPassword from './component/LoginPage/ResetPassword';



function App() {
  return (
    <div>
      {/* <Comingsoon /> */}
      <Header />
      <Routes>
        <Route path='exqure-frontend/' element={<Comingsoon />} />
        <Route path='exqure-frontend/login' element={<Login />} />
        <Route path='exqure-frontend/homepage' element={<HomePage />} />
        <Route path='exqure-frontend/forgot' element={<ForgotPassword />} />
        <Route path='exqure-frontend/reset' element={<ResetPassword />} />
        <Route path='exqure-frontend/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
