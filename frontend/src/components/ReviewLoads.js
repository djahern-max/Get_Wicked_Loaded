// src/components/SuperForm.js
import React from 'react';
import '../styles/ReviewLoads.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';



const ReviewLoads = ({ onReviewDeliveries, onSubmitToManager }) => {


  return (
    <div className="super-form">
      <button onClick={onReviewDeliveries}>Review Deliveries</button>
      <button onClick={onSubmitToManager}>Submit to Manager</button>
    </div>
  );
};


export default ReviewLoads;

