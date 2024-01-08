import React from 'react'
import './siderow.css'

function siderow({selected,Icon,title,isIconVisible}) {
  return (
    <div className={`siderow_element ${selected && 'selected'}`}>
      <Icon className={`side${isIconVisible?'Open':'Close'}_icon`}/>
      <h3 className='siderow_title' style={{display:isIconVisible?'block':'none'}}>{title}</h3>
    </div>
  )
}

export default siderow
