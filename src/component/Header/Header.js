import './Header.css'
import HeaderMeddle from './HeaderMeddle'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'
import React, { useState } from 'react';
function Header(){
    const [toggle,setToggle]=useState(false)
return(
   
  <header className="header">
   
   <HeaderTop toggle={toggle} setToggle ={setToggle}/>
  <HeaderMeddle/>
  <Navbar toggle={toggle} setToggle ={setToggle}/>
  </header>
)
}
export default Header