import React from 'react';
import '../styles/HaulFormContent.css'; // Import the CSS file

function HaulFormContent({ formData, handleChange, handleSubmit }) {
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="hauledFrom"
                    value={formData.hauledFrom}
                    onChange={handleChange}
                    placeholder="Hauled From"
                />
                <input
                    type="text"
                    name="hauledTo"
                    value={formData.hauledTo}
                    onChange={handleChange}
                    placeholder="Hauled To"
                />
                <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    placeholder="Material"
                />
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
