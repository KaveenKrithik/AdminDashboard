import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products'); 
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId)); 
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Aisle</th>
              <th>Section</th>
              <th>Location</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.aisle}</td>
                <td>{product.section}</td>
                <td>{product.location}</td>
                <td>{product.availability ? 'Yes' : 'No'}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;

