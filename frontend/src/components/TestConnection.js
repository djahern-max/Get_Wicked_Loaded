import React, { useEffect, useState } from 'react';

function TestConnection() {
    const [backendResponse, setBackendResponse] = useState('');

    useEffect(() => {
        // Make an API call to the backend
        fetch('http://localhost:3000/api/test')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setBackendResponse(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Backend Connection Test</h1>
            <p>Response from backend: {backendResponse || 'No response received'}</p>
        </div>
    );
}

export default TestConnection;
