// src/components/HaulForm.js
import React, { useState } from 'react';
import '../styles/HaulFormContent.css'; // Import the CSS file
import HaulFormContent from './HaulFormContent';
import axios from 'axios';



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

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the default form submission behavior
    console.log('Form data:', formData);  // Check form data
    try {
        const response = await axios.post('http://localhost:3000/api/delivey', formData);
        console.log('Server response:', response);
    } catch (error) {
        console.error('Submission error:', error);
    }
};


  return (
    <div>
    <HaulFormContent 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
    />
 

    </div>
  );
};

export default HaulForm;
