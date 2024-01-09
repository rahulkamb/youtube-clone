import React from 'react'
import {Link } from 'react-router-dom'
import './sidebar.css'
import Siderow from './siderow'
import { IoHomeOutline } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { GiStopwatch } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { MdOutlineSubscriptions ,MdOutlineWatchLater,MdVideoLibrary , MdSwapHorizontalCircle } from "react-icons/md";



function sidebar({isSidebarOpen}) {
  return (
    <div className={`sidebar${isSidebarOpen?'Open':'Close'}`} >
        <Link to='/' className='text-link' >
          <Siderow selected Icon={IoHomeOutline} title='Home' isIconVisible={isSidebarOpen} />
        </Link>
        <Link to='/trending' className='text-link'>
          <Siderow Icon={BsFire} title='Trending' isIconVisible={isSidebarOpen} />
        </Link>
        <Link to='/subscription' className='text-link'>
          <Siderow Icon={MdOutlineSubscriptions} title='Subscription' isIconVisible={isSidebarOpen} />
        </Link>
        
        <br />
        <hr style={{display:isSidebarOpen?'block':'none'}}/>
        <br />

        <Link to='/library' className='text-link'>
          <Siderow Icon={MdVideoLibrary} title='Library'  isIconVisible={isSidebarOpen}/>
        </Link>
        <Link to='/history' className='text-link'>
          <Siderow Icon={MdOutlineWatchLater} title='History'  isIconVisible={isSidebarOpen}/>
        </Link>
        <Link to='/countergame' className='text-link'>
          <Siderow Icon={IoGameController} title='Counter Game' isIconVisible={isSidebarOpen} />
        </Link>
        <Link to='/watchLater' className='text-link'>
          <Siderow Icon={GiStopwatch} title='Watch later' isIconVisible={isSidebarOpen} />
        </Link>
        <Link to='/swapElement' className='text-link'>
          <Siderow Icon={MdSwapHorizontalCircle} title='Swap Element'  isIconVisible={isSidebarOpen} />
        </Link>
        <Link to='/watchLater' className='text-link'>
          <Siderow Icon={RiArrowDropDownLine} title='Show More' isIconVisible={isSidebarOpen} />
        </Link>

        <br />
        <hr style={{display:isSidebarOpen?'block':'none'} } />
        <br />

    </div>
  )
}

export default sidebar
