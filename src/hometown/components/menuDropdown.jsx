import React from 'react'
import '../scss/dropdown.scss'
import { CgWebsite } from 'react-icons/cg';


export default function MenuDropdown() {
  return (
    <div className="menuDropdown dropdown">

    <div className="menuDropdownIcons">

    <a href="/hometown">
        <div>
          <CgWebsite className='menuDropdownIcon'/>
          <h4>Overview</h4>
          <hr />
        </div>
      </a>

    <a href="/hometown/guide">
        <div>
          <CgWebsite className='menuDropdownIcon'/>
          <h4>Travel Guide</h4>
          <hr />
        </div>

      </a>
      <a href="/hometown/transportation" >
        <div>
         <CgWebsite className='menuDropdownIcon'/>
          <h4>Transportation</h4>
        </div>
      </a>
    </div>


  </div>
  )
}
