// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/chat/:contactId" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
