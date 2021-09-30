import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(''); // storing the uploaded file
  // storing the recived file from backend
  // const [data, getFile] = useState({ name: '', path: '' });
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element

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
    setProgess(0);
    const file = e.target.files[0]; // accessing file
    console.log(file);
    setFile(file); // storing file
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios
      .post(
        'https://intelly-admin-task-server.herokuapp.com/upload',
        // 'http://localhost:4500/upload',
        formData,
        {
          headers: {
            'Content-Type': file.type,
            'Access-Control-Allow-Origin': '*',
          },
        },
        {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              '%';
            setProgess(progress);
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
        <input type='file' ref={el} onChange={handleChange} />
        <div className='progessBar' style={{ width: progress }}>
          {progress}
        </div>
        <button onClick={uploadFile} className='upbutton'>
          Upload
        </button>
        <hr />
        {/* displaying received image*/}
        {/* {data.path && <img src={data.path} alt={data.name} />} */}
      </div>
    </div>
  );
}

export default FileUpload;
