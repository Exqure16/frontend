import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Comingsoon } from './component/Comingsoon/Comingsoon';
import Login from './component/LoginPage/Login';


function App() {
  return (
    <div>
     {/* <Comingsoon/> */}
   <Login/>
   

    </div>
  );
};

export default App;
