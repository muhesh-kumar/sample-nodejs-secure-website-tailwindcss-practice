import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
