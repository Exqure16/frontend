import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Cmp }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/login', { replace: true });
    }
  }, []);
  return <Cmp />;
};

export default Protected;
