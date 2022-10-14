import React from 'react';
import classes from './Main.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={classes.mainLayoutWrapper}>
      <p>Main Layout</p>
      {children}
    </div>
  );
};

export default MainLayout;
