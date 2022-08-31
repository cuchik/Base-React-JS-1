import Types from '../types/auth';

export const setUser = (user) => (dispatch) => {
  dispatch({
    payload: user,
    type: Types.SET_USER_DATA,
    asyncCall: () => {
      return new Promise((resolve) => {
        resolve({ status: 1, user });
      });
    },
    onSuccess: () => {},
  });
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: Types.LOG_OUT_USER,
  });
};
