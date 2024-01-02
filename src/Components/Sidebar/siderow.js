import React from 'react'
import './siderow.css'

function siderow({selected,Icon,title}) {
  return (
    <div className={`siderow_element ${selected && 'selected'}`}>
      <Icon className='siderow_icon'/>
      <h3 className='siderow_title'>{title}</h3>
    </div>
  )
}

export default siderow
