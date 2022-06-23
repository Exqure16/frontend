import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Comingsoon } from './component/Comingsoon/Comingsoon';
import Login from './component/LoginPage/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Comingsoon/>} />
          <Route path='/login' element={<Login/>} />
         </Routes>
      </BrowserRouter>
    
   

    </div>
  );
};

export default App;
