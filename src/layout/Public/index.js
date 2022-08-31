import React from 'react';
import classes from './styles.module.scss';

const PublicLayout = ({ children }) => {
  return (
    <div className={classes.publicLayoutWrapper}>
      <p>Public Layout</p>
      {children}
    </div>
  );
};

export default PublicLayout;
