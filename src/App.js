import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Comingsoon } from './component/Comingsoon/Comingsoon';
import Login from './component/LoginPage/Login';
import HomePage from './component/HomePage/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Comingsoon/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/homepage' element={<HomePage />} />
          
         </Routes>
      </BrowserRouter>
    
    </div>
  );
};

export default App;
