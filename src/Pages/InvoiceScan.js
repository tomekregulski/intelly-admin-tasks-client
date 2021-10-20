import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import ButtonMain from '../components/ButtonMain/ButtonMain';

function InvoiceScan() {
  const [file, setFile] = useState('');
  const [resData, setResData] = useState([]);

  const el = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
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
        'https://intelly-admin-task-server.herokuapp.com/invoice-upload',
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
        setResData(res.data);
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
        <p>Select an Invoice PDF to Scan</p>
        <label
          for='invoice-upload'
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
          id='invoice-upload'
          type='file'
          ref={el}
          onChange={handleChange}
        />
        <ButtonMain onClick={uploadFile}>Upload</ButtonMain>
      </div>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        {resData.length ? (
          resData.map((item, index) => {
            console.log(item);
            console.log(item.definition);
            return (
              <p key={index}>
                Code: {item.code} | Count: {item.count} | Meaning:{' '}
                {item.definition}
              </p>
            );
          })
        ) : (
          <p>Your report will appear here</p>
        )}
      </div>
    </div>
  );
}

export default InvoiceScan;
