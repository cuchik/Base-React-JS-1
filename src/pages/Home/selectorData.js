import * as authActions from 'src/store/actions/auth';
import { useReducerData, useStoreActions } from 'src/store/hooks';

export const useIndexData = () => {
  const loginStore = useReducerData('auth', 'login', {});
  return {
    loginLoading: loginStore.loading,
  };
};

export const useActions = () => {
  return useStoreActions({
    ...authActions,
  });
};
