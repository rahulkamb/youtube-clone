import React from 'react'
import './videocard.css';

import { RiVerifiedBadgeFill } from "react-icons/ri";

function videoCard({image ,avtar,title,channelName,views,timeStamp}) {
  return (
    <div className='videoCard'>
        <div >
            <img className='videoCard_thumbnail' src={image} alt='Thumbnail' />
        </div>
        <div className='videoCard_content'>
            <img src={avtar} alt='Profile_Pic' className='videoCard_icon' />
            <div className='videoCard_title'>
                <h4>
                    {title}
                </h4>
                <p className='videoCard_channel'>
                    <p className='videoCard_channel1'>{channelName} &nbsp; <RiVerifiedBadgeFill /></p>
                    {views} • {timeStamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default videoCard
