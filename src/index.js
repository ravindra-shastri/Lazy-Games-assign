import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';
import GetOdd from './GetOdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/decript" element={<Decrypt />} />
        <Route path="/encript" element={<Encrypt />} />
        <Route path="/getodd" element={<GetOdd />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>

);


