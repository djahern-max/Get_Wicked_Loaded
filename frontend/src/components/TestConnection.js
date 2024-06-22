// import React, { useEffect, useState } from 'react';

// const TestConnection = () => {
//     const [data, setData] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:3001/test-db')
//             .then(response => response.text())
//             .then(data => setData(data))
//             .catch(err => setData('Error connecting to backend: ' + err));
//     }, []);

//     return <div>{data}</div>;
// }

// export default TestConnection;
