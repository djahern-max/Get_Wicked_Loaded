// src/components/HaulForm.js
import React, { useState } from 'react';
import '../styles/HaulForm.css'; // Import the CSS file

const HaulForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    hauledFrom: '',
    hauledTo: '',
    material: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('HaulForm data submitted:', formData);
    onSubmit();
    // Reset form
    setFormData({
      hauledFrom: '',
      hauledTo: '',
      material: '',
      quantity: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hauledFrom">Hauled From:</label>
        <input
          type="text"
          id="hauledFrom"
          name="hauledFrom"
          value={formData.hauledFrom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hauledTo">Hauled To:</label>
        <input
          type="text"
          id="hauledTo"
          name="hauledTo"
          value={formData.hauledTo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="material">Material:</label>
        <input
          type="text"
          id="material"
          name="material"
          value={formData.material}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HaulForm;


