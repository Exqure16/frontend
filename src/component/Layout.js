import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
