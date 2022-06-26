import React from 'react';

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Comingsoon from './component/Comingsoon/Comingsoon';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';
import Header from './component/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='exqure-frontend/' element={<Comingsoon />} />
        <Route path='exqure-frontend/login' element={<Login />} />
        <Route path='exqure-frontend/homepage' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
