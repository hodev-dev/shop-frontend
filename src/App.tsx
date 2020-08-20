import React, { useEffect } from 'react';
import axios from 'axios';
import './assets/css/tailwind.css';

const App = () => {

  useEffect(() => {
    request();
  }, [])

  const request = () => {
    axios.defaults.withCredentials = true;
    // axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
    //   console.log({ response });
    // });
    // axios.post('http://localhost:8000/userLogin', { email: 'test@mail.com', password: '123456', device_name: 'react' }).then(response => {
    //   console.log({ response });
    // });
    axios.post('http://localhost:8000/logout').then(response => {
      console.log({ response });
    });
  }

  return (
    <div className="flex-1 h-64 bg-red-100">
      <h1>frontend</h1>
    </div>
  );
}

export default App;
