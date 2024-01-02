import React from 'react'
import './sidebar.css'
import Siderow from './siderow'
import { IoHomeOutline } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { GiStopwatch } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineSubscriptions ,MdOutlineWatchLater,MdVideoLibrary } from "react-icons/md";





function sidebar() {
  return (
    <div className='sidebar'>
        <Siderow selected Icon={IoHomeOutline} title='Home' />
        <Siderow Icon={BsFire} title='Trending' />
        <Siderow Icon={MdOutlineSubscriptions} title='Subscription' />
        <hr />
        <Siderow Icon={MdVideoLibrary} title='Library' />
        <Siderow Icon={MdOutlineWatchLater} title='History' />
        <Siderow Icon={MdVideoLibrary} title='Your video' />
        <Siderow Icon={GiStopwatch} title='Watch later' />
        <Siderow Icon={BiLike} title='Liked video' />
        <Siderow Icon={RiArrowDropDownLine} title='Show More' />
        <hr />
    </div>
  )
}

export default sidebar
