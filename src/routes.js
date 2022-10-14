import Login from 'src/pages/Auth/Login';
import Dashboard from 'src/pages/Dashboard';
import Home from 'src/pages/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    layout: 'public',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    layout: 'private',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: 'auth',
  },
];

export default routes;
