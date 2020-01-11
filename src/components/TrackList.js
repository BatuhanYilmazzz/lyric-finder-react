import React, { useContext } from 'react';
import { LyricContext } from '../context/LyricContext';
import TrackItem from './TrackItem';
import Spinner from './Spinner';

const TrackList = () => {
  const { tracks } = useContext(LyricContext);
  const { track_list } = tracks;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <h3 className='text-center mb-4'>Top 10 Tracks</h3>
        <div className='row'>
          {track_list.map(item => (
            <TrackItem track={item.track} key={item.track.track_id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
};

export default TrackList;
