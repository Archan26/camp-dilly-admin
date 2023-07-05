// PublicRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn && restricted ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
