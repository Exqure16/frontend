import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Comingsoon from './component/Comingsoon/Comingsoon';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='exqure-frontend/' element={<Comingsoon />} />
        <Route path='exqure-frontend/login' element={<Login />} />
        <Route path='exqure-frontend/homepage' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
