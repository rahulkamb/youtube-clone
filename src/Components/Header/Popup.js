import React from 'react'
import './Popup.css'

import ProfileLogo from '../Images/profilePic.jpg'
import { MdVideoCall } from "react-icons/md";

function Popup(props) {
    return (props.isOpen) ? (
        <div className='profile_popup'>
            <ul className='profile_list'>                
                <div className='profile_myProfile'>
                    <img src={ProfileLogo} alt='Profile_Pic' className='profile_icon1' />
                    <p className='profile_Name'>
                        <h5>Rahul Kamble</h5>
                        <p style={{fontSize:'13.5px'}}>rahulkamble12373@gmail.com</p>
                    </p>
                </div>
                <hr className='horizontal_Line'></hr>
                <li className='list_text'><MdVideoCall className='list_icon' />Google Account</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Switch Account</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Sign Out</li>
                <hr className='horizontal_Line'></hr>
                <li className='list_text'><MdVideoCall className='list_icon' />YouTube Studio</li>
                <li className='list_text'><MdVideoCall className='list_icon' />purchases and memberships</li>
                <hr className='horizontal_Line'></hr>
                <li className='list_text'><MdVideoCall className='list_icon' />Your data in YouTube</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Aaperance: Device theme</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Language: English</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Restricted Mode: Off</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Location: India</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Keyboard shortcuts</li>
                <hr className='horizontal_Line'></hr>
                <li className='list_text'><MdVideoCall className='list_icon' />Settings</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Help</li>
                <li className='list_text'><MdVideoCall className='list_icon' />Send Feedback</li>

            </ul>
        </div>
    ) : ''
}

export default Popup
