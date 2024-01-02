import React from 'react'
import Sidebar from '../Sidebar/sidebar';
import Content from '../Maincontaint/containt';

function route() {
  return (
    <div className='App'>
      <div className='App_Page'>
        <Sidebar />
        <Content /> 
      </div>
    </div>
  )
}

export default route
