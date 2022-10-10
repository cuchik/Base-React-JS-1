import { useEffect } from 'react';
import { useActions, useIndexData } from './selectorData';

const Home = () => {
  const { login } = useActions();
  // eslint-disable-next-line no-unused-vars
  const { loginLoading } = useIndexData();
  useEffect(() => {
    login({
      email: 'luan@mail.com',
      password: 'test123!',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Welcome to React App</div>;
};

export default Home;
