import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'; 

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <button className='bt1' onClick={fetchProducts}>Fetch Products</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Link  style={{textDecoration:"none",color:"white"}} to={`/product/${product.id}`} key={product.id}>
              <div className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
