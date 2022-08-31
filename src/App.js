import React from 'react';
import { Route, Routes } from 'react-router';
import classes from './App.module.scss';
import PublicLayout from './layout/Public';
import RoutesList from './routes';

const App = () => {
  const renderRoutes = () => {
    const renderRoute = (Component, layout) => {
      if (Component) {
        switch (layout) {
          case 'public':
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
