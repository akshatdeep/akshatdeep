import './App.css';
import React, { useState } from 'react';




function App() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await fetch(`/generate?text=${encodeURIComponent(text)}`);
      const data = await response.json();

    
      if (response.ok) {
        if (data.qrCode) {
          setQrCode(data.qrCode);
        } else {
          console.error('No QR code data received from the server.');
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>   
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
}

export default App;


