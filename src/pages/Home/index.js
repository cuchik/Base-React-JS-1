import { useEffect } from 'react';
import { useActions } from './selectorData';

const Home = () => {
  const { setUser } = useActions();
  useEffect(() => {
    setUser({
      email: 'luan@mail.com',
      password: 'test123!',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Welcome to React App</div>;
};

export default Home;
