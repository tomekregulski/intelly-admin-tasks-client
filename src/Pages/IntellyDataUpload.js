import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

function IntellyDataUpload() {
  const [file, setFile] = useState('');
  const el = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        // 'http://localhost:4500/'
        'https://intelly-admin-task-server.herokuapp.com/'
      );
      console.log(response.data);
    }
    fetchData();
  });

  const handleChange = (e) => {
    const file = e.target.files[0]; // accessing file
    setFile(file); // storing file
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios
      .post(
        // 'https://intelly-admin-task-server.herokuapp.com/upload',
        // 'http://localhost:4500/excel/upload',
        'https://intelly-admin-task-server.herokuapp.com/excel/upload',
        // 'http://localhost:8080/api/csv/upload',
        formData,
        {
          headers: {
            'Content-Type': file.type,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='file-upload'>
        <p>Select an Excel File to Upload</p>
        <input type='file' ref={el} onChange={handleChange} />
        <button onClick={uploadFile} className='upbutton'>
          Upload
        </button>
      </div>
    </div>
  );
}

export default IntellyDataUpload;
