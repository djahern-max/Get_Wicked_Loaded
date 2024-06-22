// src/App.js
import React, { useState } from 'react';
import HaulForm from './components/HaulForm';
import SuperForm from './components/SuperForm';
import './App.css'; // Import the CSS file

function App() {
  const [showSuperForm, setShowSuperForm] = useState(false);

  const handleHaulFormSubmit = () => {
    setShowSuperForm(true);
  };

  const handleReviewDeliveries = () => {
    console.log('Review Deliveries clicked');
    // Implement further logic here
  };

  const handleSubmitToOffice = () => {
    console.log('Submit to Office clicked');
    // Implement further logic here
  };

  return (
    <div className="App">
      {!showSuperForm ? (
        <>
          <h1>Haul Form</h1>
          <HaulForm onSubmit={handleHaulFormSubmit} />
        </>
      ) : (
        <>
          <h1>Super Form</h1>
          <SuperForm
            onReviewDeliveries={handleReviewDeliveries}
            onSubmitToOffice={handleSubmitToOffice}
          />
        </>
      )}
    </div>
  );
}

export default App;





