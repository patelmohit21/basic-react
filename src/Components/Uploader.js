import React, { useState } from "react";

export default function Uploader() {

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt='upload' />}
    </div>
  );
}
