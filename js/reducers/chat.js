import { SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT } from '../constants/chat';

export default {
  [SEND_MESSAGE]: (state, { payload }) => {
    return [...state, payload.message];
  },
  [JOIN_CHAT]: (state, { payload }) => {
    return [...state, payload.username];
  },
  [LEAVE_CHAT]: (state, { payload }) => {
    return [...state, payload.username];
  }
};
