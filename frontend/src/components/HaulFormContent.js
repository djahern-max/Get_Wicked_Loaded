import React, { useState, useEffect } from 'react';
import '../styles/HaulFormContent.css'; // Import the CSS file
import axios from 'axios';

// const [formData, setFormData] = useState({
//     hauledFrom: '',
//     hauledTo: '',
//     material: '',
//     quantity: ''
// });

// const [options, setOptions] = useState({
//     hauledFromOptions: [],
//     hauledToOptions: [],
//     materialOptions: []
// });





function HaulFormContent() {

    const [materials, setMaterials] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loadcounts, setLoadcount] = useState([]);

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
            {/* <form onSubmit={handleSubmit}> */}
            <form>
            <div className="form-field">


            <p className="form-label">Hauled From:</p>


            <select className="form-select" name="hauledFrom" id="hauledFrom">
                {jobs.map((item, index) => (
                    <option key={index} value={item.JobNumber}>{item.JobName}</option>
                ))}
            </select>



            <p className="form-label">Hauled To:</p>


            <select className="form-select" name="hauledTo" id="hauledTo">
                {jobs.map((item, index) => (
                    <option key={index} value={item.JobNumber}>{item.JobName}</option>
                ))}
            </select>


            <p className="form-label">Material:</p>


            <select className="form-select" name="material" id="material">
                {materials.map((item, index) => (
                    <option key={index} value={item.ItemlisID}>{item.Description}</option>
                ))}
            </select>

            {/* <select name="material" value={formData.material} onChange={handleChange}>
            {options.materialOptions.map(option => (
            <option key={option.id} value={option.value}>
            {option.label}
            </option>
            ))}
            </select> */}



            <p className="form-label">Quantity:</p>


            <select className="form-select" name="loadcount" id="loadcount">
                {loadcounts.map((item, index) => (
                    <option key={index} value={item.yards}>{item.yards}</option>
                ))}
            </select>



                <button type="submit" className="form-button">Submit Delivery</button>


            </div>

            </form>
        </div>
    );
}

export default HaulFormContent;
