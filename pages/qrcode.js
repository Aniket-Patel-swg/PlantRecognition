// 'client-side'
// import { useState, useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const qrcode = () => {
  
//     const scanner = new Html5QrcodeScanner('reader',{
//         qrbox:{
//             width:250,
//             heigh:250,
//         },
//         fps: 5,
//     })

//     scanner.render(success,error);

//     function success(result){
//         scanner.clear()

//     }
//     return (
//         <>
//            Check Text
//         </>
//     );
// }

// export default qrcode;

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Use dynamic import for client-side rendering
const QrReader = dynamic(() => import('react-qr-scanner'), { ssr: false });

const qrcode = () => {
    const [delay, setDelay] = useState(100);
    const [result, setResult] = useState('No result');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
    const handleScan = (data) => {
      if (data) {
        setResult(data);
        setError(null); // Reset error state if scan is successful
      }
    };
  
    const handleError = (err) => {
      console.log(err);
      setError('Error scanning QR code. Please try again.');
    };
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      console.log(selectedFile)
      console.log('File changed')
    };
  
    const previewStyle = {
      height: 240,
      width: 320,
    };

    console.log(result)
  
    return (
      <div>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <p><p>{JSON.stringify(result)}</p></p>
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
  
        <input type="file" onChange={handleFileChange} />
        {file && <p>Selected File: {file.name}</p>}
      </div>
    );
  };

export default qrcode;
