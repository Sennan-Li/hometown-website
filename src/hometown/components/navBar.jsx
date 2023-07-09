import '../scss/nav.scss'
import React from 'react';
import logo from "../images/sennanli-logo(dark).png";
import { CgMenuGridO } from 'react-icons/cg';
import { RiContactsLine } from 'react-icons/ri';
import ProjectDropdown from './projectDropdown';
import MenuDropdown from './menuDropdown';

export default function NavBar({projectDropdown, setProjectDropdown, menuDropdown, setMenuDropdown}) {

  function handleProjectDropdownOpen() {
    setMenuDropdown(false)
    projectDropdown===false?setProjectDropdown(true):setProjectDropdown(false)
  }
  function handleMenuDropdownOpen() {
    setProjectDropdown(false)
    menuDropdown===false?setMenuDropdown(true):setMenuDropdown(false)

  }

  return (
    <header>
      <nav>
        <div id='navLeft'>
          <a href="https://sennanli.com" ><img className='logo' src={logo} alt=""/></a>
          <h1>Sennan's Hometown</h1>
        </div>

        <div id="navRight">
          <button onClick={handleProjectDropdownOpen}><CgMenuGridO className={projectDropdown===false?'navMenu':'openNavMenu navMenu'}/></button>
          <button onClick={handleMenuDropdownOpen} className={menuDropdown===false?'hamburger':'openHamburger hamburger'}><span></span><span></span><span></span></button>
        </div>
      </nav>
      {projectDropdown&&<ProjectDropdown/>}
      {menuDropdown&&<MenuDropdown/>}
    </header>
  )
}
