import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './component/Header/Header';
import Comingsoon from './component/Comingsoon/Comingsoon';
import Header from './component/Header/Header';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Footer from './component/Footer'


function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='exqure-frontend/' element={<Comingsoon/>} />
      <Route path='exqure-frontend/login' element={<Login/>} />
      <Route path='exqure-frontend/homepage' element={<HomePage />} />          
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
