// src/components/SuperForm.js
import React from 'react';
import '../styles/SuperForm.css'; // Import the CSS file

const SuperForm = ({ onReviewDeliveries, onSubmitToOffice }) => {
  return (
    <div className="super-form">
      <button onClick={onReviewDeliveries}>Review Deliveries</button>
      <button onClick={onSubmitToOffice}>Submit to Office</button>
    </div>
  );
};

export default SuperForm;

