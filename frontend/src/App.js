// src/App.js
import React, { useState } from 'react';
import HaulForm from './components/HaulForm';
import ReviewLoads from './components/ReviewLoads';
import './App.css'; // Import the CSS file
import TestConnection from './components/TestConnection';
import Sev_Logo from './images/Sev_Logo.png'


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
      <header className="App-header">
        <img src={Sev_Logo} alt="Severino Logo" />  
      </header>
          <HaulForm onSubmit={handleHaulFormSubmit} />
        </>
      ) : (
        <>
          <h1>Review Loads</h1>
          <ReviewLoads
            onReviewDeliveries={handleReviewDeliveries}
            onSubmitToOffice={handleSubmitToOffice}
          />
        </>
      )}

          {/* <div>
            <h1>Testing Backend Connection</h1>
            <TestConnection />
        </div> */}
    </div>
  );
}

export default App;





