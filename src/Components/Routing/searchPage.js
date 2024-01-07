import React from 'react'
import './searchPage.css'
import SearchChannel from './searchChannel';
import FlyingBeastYTLogo from '../Images/YTchannel.jpg'
import { BiFilterAlt } from "react-icons/bi";

function searchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <BiFilterAlt className='search_filter_icon'/>
        <h2 className='searchPage_text'>Filter</h2>
        <hr />
      </div>
      <div className='searchPage_channel'>
        <SearchChannel
          Image={FlyingBeastYTLogo}
          ChannelName='Flying Beast'
          SubscribeCount='8.85M Subscribers'
          NumberOfVideo='830 Videos'
          Description='I live in New Delhi. I love to share my stories with you guys. This is my Vlog channel.'
        />
      </div>
      <hr />
    </div>
  )
}

export default searchPage
