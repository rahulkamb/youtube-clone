import React from 'react'
//import Sidebar from '../Sidebar/sidebar';
import Content from '../Maincontaint/containt';

function route({isContentOpen}) {



  return (
    <div className=''>
      <div className=''>
        {/* <Sidebar /> */}
        <Content isContentOpen={isContentOpen} /> 
      </div>
    </div>
  )
}

export default route
