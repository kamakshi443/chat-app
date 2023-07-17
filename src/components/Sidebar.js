// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar() {
  const conversations = useSelector((state) => state.conversations);

  return (
    <div className="sidebar">
      <h2>Conversations</h2>
      {conversations.map((conversation) => (
        <Link to={`/chat/${conversation.contactId}`} key={conversation.contactId}>
          <div className="conversation">
            <h3>{conversation.contactName}</h3>
            <p>{conversation.lastMessage}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
