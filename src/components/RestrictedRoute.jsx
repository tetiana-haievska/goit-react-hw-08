// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

// const RestrictedRoute = ({ children, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : children;
// };

// export default RestrictedRoute;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import React from "react";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : React.createElement(Component);
};

export default RestrictedRoute;
