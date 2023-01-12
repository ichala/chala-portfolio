import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminContext } from './AdminContext';

const Protected = () => {
  const { currentUser } = useContext(AdminContext);
  if (!currentUser) {
    return (
      <Navigate to={`/login?returnUrl=${window.location.pathname} `} replace />);
  }
  return (
    <Outlet />
  );
};

export default Protected;
