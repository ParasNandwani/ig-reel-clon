
import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'

const cors = require('cors')({ origin: true });

function App() {

  const [reels,setReels]=useState([]);
  useEffect(()=>{
      db.collection('Reels').onSnapshot(snapshot=>{
          setReels(snapshot.docs.map(doc=>doc.data()))
      })
  },[])

  return (
    <div className="app">
      <div className="app_top">
             <img 
             className="app_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"/>
             <h1>Reels</h1>
      </div>
      <div className="app_videos">
        {reels.map(({url,likes,shares,channel,avatarSrc,song})=>(
              <VideoCard
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
              ></VideoCard>
              ))}
      </div>
    </div>
  );
}

export default App;
