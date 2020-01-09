import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const LyricContext = createContext();
const API_KEY = '7e2ea89a96ddc2fa75e74cc502305d56';

const LyricContextProvider = props => {
  const [tracks, setTrackList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setTrackList(res.data);
      })
      .catch(err => err);
  }, []);
  return (
    <LyricContext.Provider value={{ tracks }}>
      {props.children}
    </LyricContext.Provider>
  );
};

export default LyricContextProvider;
