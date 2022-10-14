import React from 'react';
import classes from './Auth.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={classes.authLayoutWrapper}>
      <p>Auth Layout</p>
      {children}
    </div>
  );
};

export default AuthLayout;
