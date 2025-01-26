import React from 'react';
import { Navigate, Outlet } from '@tanstack/react-router';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  isHost?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

const HostRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, isHost }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && !isHost) {
    return <Navigate to="/host/join" />;
  }
  return <Outlet />;
}

export { PrivateRoute, HostRoute };
