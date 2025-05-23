import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://gameforge-ai.onrender.com/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error('Error fetching from backend:', error);
        setMessage('Failed to connect to backend.');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to GameForge!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
