import BaseAxios from 'axios';
import get from 'lodash/get';
import { store } from 'src/store';

class Request {
  axios;

  constructor() {
    // Timeout is 60 * 60000 = 60x60s = 60m = 1hour
    this.axios = BaseAxios.create({ timeout: 3600000 });
  }

  async call(config) {
    try {
      const serverBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const state = store.getState();
      const token = get(state, 'auth.login.access_token', '');
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          token || config.token ? `Bearer ${token || config.token}` : undefined,
      };
      const res = await this.axios.request({
        baseURL: serverBaseUrl,
        headers,
        ...config,
      });
      const status = get(res, 'data.status');
      if (status === 0) {
        throw res;
      } else {
        return res.data;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new Request();
