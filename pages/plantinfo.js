import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/PlantInfo.module.css';

const plantinfo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [recognizedPlant,setRecognizedPlant] = useState('Tulsi');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("File0",event.target.files[0])
  };

  useEffect(() => {
    axios.get('http://localhost:5000/plan')
      .then((response) => {
        const recognizedPlant = response.data;
        console.log("recc",recognizedPlant)
        console.log("resp",response)
        setRecognizedPlant(recognizedPlant);
      })
      .catch((error) => {
        console.error('Error fetching recognized plant:', error);
      });

    console.log('useEffect is running')
  }, []);

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000', formData);
        const recognizedPlant = response.data;
        console.log('Recognized Plant:', recognizedPlant);

        setRecognizedPlant(recognizedPlant);

        setMessage(response.data.message);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };  

  return (
    <div className={styles.plantInfo_page}>
      <section className={styles.upload_image}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </section>
      Test
      {selectedFile && (
        <div>
          <h4>Selected File:</h4>
          <p>{selectedFile.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
      {message && (
        <div>
          <h4>Server Response:</h4>
          <p>{message}</p>
        </div>
      )}

      <h2>Scanned Plant is:</h2>
      {recognizedPlant && <>
        {recognizedPlant}
      </>}

      <Link href={`/Plants/${recognizedPlant}`}>
            More Info
        </Link> 
        check
    </div>
  );
};

export default plantinfo;