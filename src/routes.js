import Dashboard from 'src/pages/Dashboard';
import Home from 'src/pages/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    isPrivate: false,
    layout: 'public',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    isPrivate: false,
    layout: 'public',
  },
];

export default routes;
