import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import {FiMoon} from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/theme/themeSlice';
const Navbar = () => {

  const dispatch = useDispatch();
  return (
    <section className="navbar-container">
        <nav className="wrapper">
            <Link to='/'>
              <h1>Where in the world?</h1>
            </Link>
            <div className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
                <FiMoon/>
                <span>Dark Mode</span>
            </div>
        </nav>
    </section>
  )
}

export default Navbar