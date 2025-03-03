import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
    navigate('/cart');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
