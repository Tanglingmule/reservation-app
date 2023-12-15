import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use any library for HTTP requests
import createButtons from './create-buttons';

const ButtonComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your own API endpoint
    axios.get('http://your-api-endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      {createButtons(data)}
    </div>
  );
};

export default ButtonComponent;
