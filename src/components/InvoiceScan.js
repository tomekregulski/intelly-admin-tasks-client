import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

function InvoiceScan() {
  const [file, setFile] = useState('');
  const [resData, setResData] = useState([]);

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
        'http://localhost:4500/invoice-upload',
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
      <div className='file-upload'>
        <p>Select an Invoice PDF to Scan</p>
        <input type='file' ref={el} onChange={handleChange} />
        <button onClick={uploadFile} className='upbutton'>
          Upload
        </button>
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
          <p>This is where you report will appear</p>
        )}
      </div>
    </div>
  );
}

export default InvoiceScan;
