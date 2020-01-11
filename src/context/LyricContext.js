import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const LyricContext = createContext();
const API_KEY = '7e2ea89a96ddc2fa75e74cc502305d56';

const LyricContextProvider = props => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${API_KEY}`
      )
      .then(res => {
        setTracks(res.data.message.body);
        console.log(res.data.message.body);
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
