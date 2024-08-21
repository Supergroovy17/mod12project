import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from './cartSlice';
import { fetchProducts } from './fetchProducts'; 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
