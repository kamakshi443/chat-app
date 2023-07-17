// src/reducers/conversationReducer.js
import { ADD_MESSAGE } from '../actions/types';
import data from '../data.json';

const initialState = {
  conversations: data.conversations,
};

const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { contactId, message } = action.payload;
      const conversations = state.conversations.map((conversation) => {
        if (conversation.contactId === contactId) {
          return {
            ...conversation,
            messages: [...conversation.messages, message],
            lastMessage: message.text,
          };
        }
        return conversation;
      });
      return {
        ...state,
        conversations,
      };
    default:
      return state;
  }
};

export default conversationReducer;
