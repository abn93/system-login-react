// src/components/AdminRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ element }) => {
  const accessToken = localStorage.getItem('accessToken');
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  const location = useLocation();

  return accessToken && isAdmin ? element : <Navigate to="/dashboard" state={{ from: location }} />;
};

export default AdminRoute;
