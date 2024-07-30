import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile'; // Asegúrate de que el componente Profile esté en esta ruta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* Ruta por defecto, redirige a /login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
