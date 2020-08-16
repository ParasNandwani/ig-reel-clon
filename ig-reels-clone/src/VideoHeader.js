import React from 'react'
import './VideoHeader.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'



function VideoHeader(){


    return(
            <div className='videoheader'>
                <ArrowBackIcon/>
                <h3>Reels</h3>
                <CameraAltOutlinedIcon />
            </div>
    )

}


export default VideoHeader;