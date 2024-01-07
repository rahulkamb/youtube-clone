import React from 'react'
import {Link } from 'react-router-dom'
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
        <Link to='/' className='text-link' >
          <Siderow selected Icon={IoHomeOutline} title='Home' />
        </Link>
        <Link to='/trending' className='text-link'>
          <Siderow Icon={BsFire} title='Trending' />
        </Link>
        <Link to='/subscription' className='text-link'>
          <Siderow Icon={MdOutlineSubscriptions} title='Subscription' />
        </Link>
        <hr />
        <Link to='/library' className='text-link'>
          <Siderow Icon={MdVideoLibrary} title='Library' />
        </Link>
        <Link to='/history' className='text-link'>
          <Siderow Icon={MdOutlineWatchLater} title='History' />
        </Link>
        <Link to='/library' className='text-link'>
          <Siderow Icon={MdVideoLibrary} title='Your video' />
        </Link>
        <Link to='/watchLater' className='text-link'>
          <Siderow Icon={GiStopwatch} title='Watch later' />
        </Link>
        <Link to='/watchLater' className='text-link'>
          <Siderow Icon={BiLike} title='Liked video' />
        </Link>
        <Link to='/watchLater' className='text-link'>
          <Siderow Icon={RiArrowDropDownLine} title='Show More' />
        </Link>
        <hr />
    </div>
  )
}

export default sidebar
