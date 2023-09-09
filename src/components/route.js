// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the correct import order
import ProductList from '../components/productList'; // Correct component file name
import ProductDetail from '../components/productDetail'; // Correct component file name

function AppRoutes() { 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
