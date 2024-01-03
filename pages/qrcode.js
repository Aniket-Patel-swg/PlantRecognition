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


  const previewStyle = {
    height: 240,
    width: 320,
  };

  const parsedResult = result.text ? JSON.parse(result.text) : {};

  console.log("result: ", result.text)

  return (
    <div>
      <h1>Scan your QR Here!</h1>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {/* <p><p>{JSON.stringify(result)}</p></p> */}

      {result == "No result" ? 
        <>
          <p>No Result, Scan QR code</p>
        </>:
        <>
          <h3>Name: </h3>
       
          <p>{parsedResult.Name}</p>   <br />
          <h3>General Info:</h3>
          
          <p>{parsedResult.GeneralInfo}</p><br />
          <h3>Medicinal Info: </h3>
          
          <p>{parsedResult.MedicinalInfo}</p><br />
          <h3>Cultivation Info:</h3>
         
          <p>{parsedResult.CultivationInfo}</p> <br />
        </>        
      }


      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default qrcode;
