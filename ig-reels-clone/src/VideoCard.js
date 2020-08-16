import React, { useState, useRef } from 'react'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter'
import './VideoCard.css'


function VideoCard({url,likes,shares,channel,avatarSrc,song}){


    const[isVideoPlaying,setIsVideoPlaying]=useState(false)
    const videoRef=useRef(null);

    const  onVideoPress =()=>{
        if(isVideoPlaying){
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }else{
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }
        
    return (
        <div className='videoCard'>
        <VideoHeader />
        <video  autoPlay
            ref={videoRef}
            onClick={onVideoPress}
            className='video_player'
            src={url}
            alt='Ig Reel video'
            loop />
        <VideoFooter 
        likes={likes}
        shares={shares}
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        />
        </div>

    )
}

export default VideoCard;

