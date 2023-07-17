// src/components/Chat.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../actions/conversationActions';

function Chat() {
  const { contactId } = useParams();
  const conversations = useSelector((state) => state.conversations);
  const selectedConversation = conversations.find((conversation) => conversation.contactId === contactId);
  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    dispatch(addMessage(contactId, message));
    e.target.reset();
  };

  if (!selectedConversation) {
    return <div>No conversation found.</div>;
  }

  return (
    <div className="chat">
      <h2>{selectedConversation.contactName}</h2>
      <div className="messages">
        {selectedConversation.messages.map((message) => (
          <div className="message" key={message.id}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" placeholder="Type your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
