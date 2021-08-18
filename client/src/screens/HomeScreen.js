import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const { data } = await axios.get('http://localhost:9000/testServer');
        setInfo(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getInfo();
  }, []);

  return (
    <div>
      {info.map((diary) => (
        <div key={diary.title}>
          <h1>{diary.title}</h1>
          <p>{diary.content1}</p>
          <p>{diary.content2}</p>
          <p>{diary.content3}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
