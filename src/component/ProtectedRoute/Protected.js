import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import AuthContext from '../Context/AuthProvider';
// import { useContext } from 'react';

const Protected = () => {
  // const { auth } = useContext(AuthContext);
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default Protected;
