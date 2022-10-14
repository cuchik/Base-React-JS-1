import React from 'react';
import { Route, Routes } from 'react-router';
// import { Navigate, useLocation } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useReducerData } from 'src/store/hooks';
import classes from './App.module.scss';
import AuthLayout from './layout/Auth';
import MainLayout from './layout/Main';
import PublicLayout from './layout/Public';
import RoutesList from './routes';

const App = () => {
  // const location = useLocation();
  const isLoggedIn = useReducerData('auth', 'login.data.token', '');
  const renderRoutes = () => {
    const renderRoute = (Component, layout) => {
      if (Component) {
        switch (layout) {
          case 'private': {
            if (isLoggedIn) {
              return (
                <MainLayout>
                  <Component />
                </MainLayout>
              );
            }
            return (
              // <Navigate to="/login" replace state={{ path: location.pathname }} />
              <Navigate to="/login" replace />
            );
          }
          case 'auth': {
            return (
              <AuthLayout>
                <Component />
              </AuthLayout>
            );
          }
          default:
            return (
              <PublicLayout>
                <Component />
              </PublicLayout>
            );
        }
      }
      return null;
    };

    return RoutesList.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={renderRoute(route.component, route.layout)}
      />
    ));
  };

  return (
    <div className={classes.app}>
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default App;
