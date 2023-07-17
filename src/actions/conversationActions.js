// src/actions/conversationActions.js
import { ADD_MESSAGE } from './types';

export const addMessage = (contactId, text) => {
  const message = {
    id: Date.now(),
    text,
  };

  return {
    type: ADD_MESSAGE,
    payload: {
      contactId,
      message,
    },
  };
};
