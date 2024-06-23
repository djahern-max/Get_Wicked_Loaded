// src/components/HaulForm.js
import React, { useState, useEffect } from 'react';
import '../styles/HaulFormContent.css'; // Import the CSS file
// import HaulFormContent from './HaulFormContent';
import axios from 'axios';



const HaulForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    hauledFrom: '',
    hauledTo: '',
    material: '',
    quantity: ''
  });
  const [materials, setMaterials] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loadcounts, setLoadcount] = useState([]);


const handleSubmit = async (e) => {
  e.preventDefault();  // Prevents the default form submission behavior
  console.log('Form data:', formData);  // Check form data
  try {
      const response = await axios.post('http://localhost:3000/api/deliveries', formData);
      console.log('Server response:', response);
  } catch (error) {
      console.error('Submission error:', error);
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

useEffect(() => {

  axios.get('http://localhost:3000/api/material')
  .then(response => {
      setMaterials(response.data);
  })
  .catch(error => {
      console.error('Error fetching materials:', error);
  });
  
  axios.get('http://localhost:3000/api/job')
  .then(response => {
      setJobs(response.data);
  })
  .catch(error => {
      console.error('Error fetching jobs:', error);
  });
  
  axios.get('http://localhost:3000/api/loadcount')
  .then(response => {
      setLoadcount(response.data);
  })
  .catch(error => {
      console.error('Error fetching loadcounts:', error);
  });
  
  }, []);



  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} action="/submit-form" method="POST">
    <div className="form-field">
    <p className="form-label">Hauled From:</p>


    <select className="form-select" name="hauledFrom" id="hauledFrom">
        {jobs.map((item, index) => (
            <option key={index} value={item.JobNumber}>{item.JobName}</option>
        ))}
    </select>

    {/* <input
          type="text"
          id="hauledFrom"
          name="hauledFrom"
          value={formData.hauledFrom}
          onChange={handleChange}
        /> */}


    <p className="form-label">Hauled To:</p>


    <select className="form-select" name="hauledTo" id="hauledTo">
        {jobs.map((item, index) => (
            <option key={index} value={item.JobNumber}>{item.JobName}</option>
        ))}
    </select>

       {/* <input
          type="text"
          id="hauledTo"
          name="hauledTo"
          value={formData.hauledTo}
          onChange={handleChange}
        /> */}


    <p className="form-label">Material:</p>


    <select className="form-select" name="material" id="material">
        {materials.map((item, index) => (
            <option key={index} value={item.ItemID}>{item.Description}</option>
        ))}
    </select>

       {/* <input
          type="text"
          id="material"
          name="material"
          value={formData.material}
          onChange={handleChange}
         /> */}



    <p className="form-label">Quantity:</p>


    <select className="form-select" name="loadcount" id="loadcount">
        {loadcounts.map((item, index) => (
            <option key={index} value={item.yards}>{item.yards}</option>
        ))}
    </select> 
{/* 
          <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          /> */}
    

        <button type="submit" className="form-button">Submit Delivery</button>


    </div>

    </form>
</div>
  );
};

export default HaulForm;
