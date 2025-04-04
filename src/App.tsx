import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './view/Login/LoginView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;