import React, { useState, useEffect } from 'react';
import '../styles/HaulFormContent.css'; // Import the CSS file
import axios from 'axios';

function HaulFormContent({ formData, handleChange, handleSubmit }) {

    const [materials, setMaterials] = useState([]);
    const [jobs, setJobs] = useState([]);

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
                console.error('Error fetching materials:', error);
            });
    }, []);

    return (
        <div className="form-container haul-form select haul-form select:hover haul-form select:focus haul-form option">
            <form onSubmit={handleSubmit}>
            <select name="hauledFrom" id="job">
                {jobs.map((item, index) => (
                    <option key={index} value={item.JobNumber}>{item.JobName}</option>
                ))}
            </select>
            <select name="hauledTo" id="job">
                {jobs.map((item, index) => (
                    <option key={index} value={item.JobNumber}>{item.JobName}</option>
                ))}
            </select>
            <select name="material" id="material">
                {materials.map((item, index) => (
                    <option key={index} value={item.ItemID}>{item.ItemID}</option>
                ))}
            </select>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity (yds)"
                />
                <button type="submit">Submit Delivery</button>
            </form>
        </div>
    );
}

export default HaulFormContent;
