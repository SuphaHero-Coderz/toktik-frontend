import React, { useState } from 'react';
import Navbar from './NavBar';
import "./UploadPage.css"

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <div className="upload-page">
        <h1>Upload Your File</h1>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadPage;

