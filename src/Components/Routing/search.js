import React from 'react'
import Sidebar from '../Sidebar/sidebar';
import SearchPage from './searchPage'

function search() {
  return (
    <div className='App'>
      <div className='App_Page'>
        <Sidebar />
        <SearchPage /> 
      </div>
    </div>
  )
}

export default search
