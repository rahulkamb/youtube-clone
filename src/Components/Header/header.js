import React , {useState as UseState} from 'react'
import './header.css'
import Youtube_logo from '../Images/youtube.png'
import ProfileLogo from '../Images/profilePic.jpg'
import { useNavigate as UseNavigate , Link } from 'react-router-dom'
import Popup from './Popup'

import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdVideoCall } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
//import { FaRegCircle } from "react-icons/fa";

function header({toggleSidebar}) {

  const [inputSearch , setInputSearch] = UseState('');
  const [isOpen , setIsOpen] = UseState(false);

  const generateDropDown = () =>{
    setIsOpen(!isOpen);
  }

  const navigate = UseNavigate();

  const sendRequest =()=> {
    if(inputSearch){
      navigate( `/search/${inputSearch}`);
    }
  };

  return (
    <div className='youtube__header'>
      <div className='header_left'>
        <IoMenu className='header_menu' onClick={toggleSidebar}/>
        <Link to={'/'}>
          <img src={Youtube_logo} alt='' className='header__yt_icon'  />
        </Link>
      </div>
      <div className='header_moddle'>
        <input onChange={(e) =>setInputSearch(e.target.value)} value={inputSearch} type='text' placeholder='Search' className='header_search' required />
        {/* <Link to={`/search/${inputSearch}`}> 
          <CiSearch className='header_search_icon'  />
        </Link> */}
        <button className='btn-header' onClick={sendRequest} >
          <CiSearch className='header_search_icon'/>
        </button>
      </div>
      <div className='header_right'>
        <MdVideoCall className='header_icon' />
        <CgMenuGridR className='header_icon' />
        <FaBell className='header_icon' />
        <img src={ProfileLogo} alt='Profile_Pic' className='profile_icon' onClick={generateDropDown} />
        <Popup isOpen={isOpen} />
      </div>
    </div>
  )
}

export default header
