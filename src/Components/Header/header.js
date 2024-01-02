import React from 'react'
import './header.css'
import Youtube_logo from '../Images/youtube.png'
import ProfileLogo from '../Images/profilePic.jpg'

import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdVideoCall } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
//import { FaRegCircle } from "react-icons/fa";

function header() {
  return (
    <div className='youtube__header'>
      <div className='header_left'>
        <IoMenu className='header_menu'/>
        <img src={Youtube_logo} alt='' className='header__yt_icon' />
      </div>
      <div className='header_moddle'>
        <input type='text' placeholder='Search' className='header_search' />
        <button className='btn-header'>
          <CiSearch className='header_search_icon'/>
        </button>
      </div>
      <div className='header_right'>
        <MdVideoCall />
        <CgMenuGridR />
        <FaBell />
        <img src={ProfileLogo} alt='Profile_Pic' className='profile_icon' />
      </div>
    </div>
  )
}

export default header
