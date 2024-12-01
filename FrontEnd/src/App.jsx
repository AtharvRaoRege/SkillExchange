import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register'; // Register component
import Login from './components/Login'; // Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Default route to Register */}
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
