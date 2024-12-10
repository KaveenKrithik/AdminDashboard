import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    aisle: '',
    section: '',
    location: '',
    availability: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API Call logic goes here
    console.log(product);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <input type="text" name="aisle" placeholder="Aisle" onChange={handleChange} />
      <input type="text" name="section" placeholder="Section" onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <select name="availability" onChange={handleChange}>
        <option value="">Availability</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
