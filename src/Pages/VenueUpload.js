import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import ButtonMain from '../components/ButtonMain/ButtonMain';

function VenueUpload() {
  const [file, setFile] = useState('');
  const el = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0]; // accessing file
    setFile(file); // storing file
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios
      .post(
        'https://fieldist-back-end.herokuapp.com/api/venues/bulk',
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
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '60px auto 0',
          maxWidth: '400px',
          border: '1px solid rgba(0, 180, 249, 0.872)',
          borderRadius: '5px',
        }}
      >
        <p>Select an Venue Upload Template (.xlsx) to upload</p>
        <label
          htmlFor='venue-upload'
          style={{
            border: '1px solid rgba(0, 180, 249, 0.872)',
            display: 'inline-block',
            padding: '6px 12px',
            cursor: 'pointer',
            boxShadow: 'none',
            margin: '20px auto 20px',
            textTransform: 'none',
            fontSize: 16,
            lineHeight: 1.5,
            backgroundColor: '#fff',
            borderRadius: '5px',
            color: 'rgba(0, 180, 249, 0.872)',
          }}
        >
          Choose File
        </label>
        <input
          style={{ display: 'none' }}
          id='venue-upload'
          type='file'
          ref={el}
          onChange={handleChange}
        />
        <ButtonMain onClick={uploadFile}>Upload</ButtonMain>
      </div>
    </div>
  );
}

export default VenueUpload;
