// src/App.js
import React, { useState } from "react";
import HaulForm from "./components/HaulForm";
import ReviewLoads from "./components/ReviewLoads";
import "./App.css"; // Import the CSS file
import TestConnection from "./components/TestConnection";

function App() {
  const [showSuperForm, setShowSuperForm] = useState(false);

  const handleHaulFormSubmit = () => {
    setShowSuperForm(true);
  };

  const handleReviewDeliveries = () => {
    console.log("Review Deliveries clicked");
    // Implement further logic here
  };

  const handleSubmitToOffice = () => {
    console.log("Submit to Office clicked");
    // Implement further logic here
  };

  return (
    <div className="App">
      {!showSuperForm ? (
        <>
          <header className="App-header"></header>
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
        <h1>Backend Connection</h1>
        <TestConnection />
      </div> */}
    </div>
  );
}

export default App;
