import Request from './request';

export const apiLogin = async (data) => {
  return Request.call({
    url: '/user/login',
    method: 'POST',
    data,
  });
};
