import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './view/Login/LoginView';
import RegistrationView from './view/Registration/RegistrationView';
import HomeView from './view/Home/HomeView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegistrationView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/*" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;