import React, { useState, useEffect } from "react";
import "../styles/HaulFormContent.css"; // Import the CSS file
import axios from "axios";
import Sev_Logo from "../../src/images/Sev_Logo.png";

function HaulFormContent({ handleSubmit, formData, handleChange }) {
  const [materials, setMaterials] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loadcounts, setLoadcount] = useState([]);
  const [phasecodes, setPhasecode] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/material")
      .then((response) => {
        console.log("Materials data:", response.data); // Debugging line
        setMaterials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching materials:", error);
      });

    axios
      .get("http://localhost:3000/api/job")
      .then((response) => {
        console.log("Jobs data:", response.data); // Debugging line
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });

    axios
      .get("http://localhost:3000/api/loadcount")
      .then((response) => {
        console.log("Loadcounts data:", response.data); // Debugging line
        setLoadcount(response.data);
      })
      .catch((error) => {
        console.error("Error fetching loadcounts:", error);
      });

    axios
      .get("http://localhost:3000/api/phasecode")
      .then((response) => {
        console.log("Loadcounts data:", response.data); // Debugging line
        setPhasecode(response.data);
      })
      .catch((error) => {
        console.error("Error fetching loadcounts:", error);
      });
  }, []);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <img src={Sev_Logo} alt="Severino Logo" />
        <div className="form-field">
          <p className="form-label">Hauled From:</p>
          <select
            className="form-select"
            name="hauledFrom"
            id="hauledFrom"
            value={formData.hauledFrom}
            onChange={handleChange}
          >
            <option value="">Where did you pick up?</option>
            {jobs.length > 0 ? (
              jobs.map((item, index) => (
                <option key={index} value={item.job_number}>
                  {item.job_name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
          <p className="form-label">Hauled To:</p>
          <select
            className="form-select"
            name="hauledTo"
            id="hauledTo"
            value={formData.hauledTo}
            onChange={handleChange}
          >
            <option value="">Where did you deliver?</option>
            {jobs.length > 0 ? (
              jobs.map((item, index) => (
                <option key={index} value={item.job_number}>
                  {item.job_name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
          <p className="form-label">Material:</p>
          <select
            className="form-select"
            name="material"
            id="material"
            value={formData.material}
            onChange={handleChange}
          >
            <option value="">What type of material?</option>
            {materials.length > 0 ? (
              materials.map((item, index) => (
                <option key={index} value={item.item_code}>
                  {item.description}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>

          <p className="form-label">Quantity:</p>
          <select
            className="form-select"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
          >
            <option value="">How much?</option>
            {loadcounts.length > 0 ? (
              loadcounts.map((item, index) => (
                <option key={index} value={item.quantity}>
                  {item.quantity}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>

          <p className="form-label">Phasecode:</p>
          <select
            className="form-select"
            name="phasecode "
            id="phasecode"
            value={formData.phasecodes}
            onChange={handleChange}
          >
            <option value="">Which Phase Code?</option>
            {phasecodes.length > 0 ? (
              phasecodes.map((item, index) => (
                <option key={index} value={item.description}>
                  {item.phaseCode}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>

          <button type="submit" className="form-button">
            Submit Delivery
          </button>
        </div>
      </form>
    </div>
  );
}

export default HaulFormContent;
