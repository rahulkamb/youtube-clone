import React from 'react'
import './searchChannel.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";

function searchChannel({Image, ChannelName, SubscribeCount, NumberOfVideo, Description}) {
    return (
        <div className='searchChannel'>
            <div className='searchChannel_logo'>
                <img src={Image} alt='YTLogo' className='YT_image' />
            </div>
            <div className='searchChannel_main_content'>
                <div className='searchChannel_content'>
                    <h2 className='YT_ChannelName'>{ChannelName}</h2> &nbsp;&nbsp;&nbsp;
                    <RiVerifiedBadgeFill className='YT_icon' />               
                </div>
                <div className='searchChannel_description'>
                    <p>
                        {SubscribeCount} • {NumberOfVideo}
                    </p>
                    <p>
                        {Description}
                    </p>
            </div>
            </div>
        </div>
    )
}

export default searchChannel
