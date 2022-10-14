import * as authActions from 'src/store/actions/auth';
import { useReducerData, useStoreActions } from 'src/store/hooks';

export const useIndexData = () => {
  const loginStore = useReducerData('auth', 'login', {});
  return {
    loginLoading: loginStore.loading,
    isLoggedIn: !!loginStore.data?.token,
  };
};

export const useActions = () => {
  return useStoreActions({
    ...authActions,
  });
};
