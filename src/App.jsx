import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect to home if authenticated, otherwise show login */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/products" element={isAuthenticated ? <ProductList /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isAuthenticated ? <ShoppingCart /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


