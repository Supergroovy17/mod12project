// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Product Inventory</h1>
      <nav className="mt-4">
        <Link to="/login" className="btn btn-primary me-3">Login</Link>
        <Link to="/register" className="btn btn-secondary me-3">Register</Link>
        <Link to="/products" className="btn btn-success me-3">Product Catalog</Link>
        <Link to="/cart" className="btn btn-info">Shopping Cart</Link>
      </nav>
    </div>
  );
};

export default Home;
