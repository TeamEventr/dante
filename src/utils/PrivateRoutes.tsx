import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  isHost?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, isHost }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (!isAuthenticated && !isHost) {
    return <Navigate to="/host/join" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
