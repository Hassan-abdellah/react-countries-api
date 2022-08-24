import React from 'react'
import './header.css';
import Searchbar from '../searchbar/Searchbar'
import Dropdown from '../dropdown/Dropdown';
const Header = () => {
  return (
    <header className="wrapper">
        <Searchbar/>
        <Dropdown/>
    </header>
  )
}

export default Header