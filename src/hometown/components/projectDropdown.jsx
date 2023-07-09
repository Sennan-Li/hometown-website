import React from 'react'
import todo from "../images/todo.png";
import notes from "../images/notes.png";
import hometown from "../images/hometown.png"
import notebook from "../images/notebook.png"
import eCommerce from "../images/e-commerce.png"
import { MdWeb } from 'react-icons/md';
import '../scss/dropdown.scss'

export default function ProjectDropdown() {
  return (
    <div className="projectDropdown dropdown">
    <h4>Websites</h4>
    <div className="projectDropdownIcons web">
    <a href="https://hometown.sennanli.com">
        <div>
        <img src={hometown} alt="" className='webImg'/>
          <small>Hometown</small>
        </div>
      </a>
      <a href="https://notebook.sennanli.com">
        <div>
        <img src={notebook} alt="" className='webImg'/>
          <small>Notebook</small>
        </div>
      </a>
      <a href="https://store.sennanli.com">
        <div>
        <img src={eCommerce} alt="" className='webImg'/>
          <small>E-shop</small>
        </div>
      </a>
      
    </div>

    <h4>Web Apps</h4>
    <div className="projectDropdownIcons">
      <a href="https://notes.sennanli.com">
        <div>
          <img src={notes} alt="" />
          <small>Notes</small>
        </div>
      </a>
      <a href="https://todo.sennanli.com">
        <div>
          <img src={todo} alt="" />
          <small>To Do</small>
        </div>
      </a>
    </div>

  </div>
  )
}
