// app/products/page.tsx

import React from 'react';

async function fetchProducts() {
  // Replace with an API call to your product API
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products;
}

const Products = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
