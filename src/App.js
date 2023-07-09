import React, {useState} from 'react';
import './hometown/scss/hometown.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Hometown from './hometown/pages/hometown';
import NavBar from './hometown/components/navBar';
import Footer from './hometown/components/footer';
import Transpotation from './hometown/pages/transportation';
import Guide from './hometown/pages/guide';

function App() {
  const [projectDropdown, setProjectDropdown] = useState(false)
  const [menuDropdown, setMenuDropdown] = useState(false)
  function handleDropdownClose() {
    setMenuDropdown(false)
    setProjectDropdown(false)
  }
  return (
    <React.Fragment>
      <NavBar projectDropdown={projectDropdown} setProjectDropdown={setProjectDropdown} menuDropdown={menuDropdown} setMenuDropdown={setMenuDropdown} />
    <BrowserRouter>
      <Routes>
        <Route path='/hometown/transportation' element={<Transpotation onDropdownClose={handleDropdownClose}/>} />
        <Route path='/hometown/guide' element={<Guide onDropdownClose={handleDropdownClose}/>} />
        <Route path='/hometown' element={<Hometown onDropdownClose={handleDropdownClose}/>} />
        <Route path="/" element={<Navigate replace to="/hometown" />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.Fragment>
  );
}

export default App;
