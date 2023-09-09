import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppRoutes from './components/route'

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const toggleProductList = () => {
    setShowProductList(!showProductList);
  };

  return (
    <div className="App">
      <button disabled={true} onClick={toggleProductList}>Show Product List</button>
      <h1>E-COMMERCE WEBSITE</h1>
      <img src='https://b.kisscc0.com/20180517/pq/kisscc0-marketing-retail-shopping-e-commerce-clothing-5afdaadfc01594.4132037015265737917868.jpg' width={"100%"} height={"70%"}/>
      {showProductList && <Link to="/">Go to Product List</Link>}
     < AppRoutes/>
    </div>
  );
}

export default App;
