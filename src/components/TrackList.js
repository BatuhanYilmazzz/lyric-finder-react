import React, { useContext } from 'react';
import { LyricContext } from '../context/LyricContext';

const TrackList = () => {
  const { tracks } = useContext(LyricContext);
  return <div></div>;
};

export default TrackList;
