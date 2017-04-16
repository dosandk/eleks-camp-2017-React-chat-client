import { LOGIN } from '../constants/login';

export default {
  [LOGIN]: (state, { payload }) => {
    return payload.user;
  }
};
