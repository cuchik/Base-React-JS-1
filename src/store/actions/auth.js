import { apiLogin } from 'src/api';
import Types from '../types/auth';

export const login = (data, cb) => {
  return {
    isAsyncCall: true,
    payload: {},
    type: Types.LOGIN,
    asyncCall: () => {
      return apiLogin(data);
    },
    afterSuccessCall: (_dispatch, response) => {
      if (cb) cb(response);
    },
    afterFailureCall: (_dispatch, err) => {
      if (cb) cb(false, err);
    },
  };
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: Types.LOG_OUT_USER,
  });
};
