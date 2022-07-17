import React, {useState} from 'react'
import './NavbarStyle.css'
import {SiDatabricks} from 'react-icons/si'
import {FaBars} from 'react-icons/fa'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <SiDatabricks className='icon'/>
                <h1>Secured</h1>
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>Home</li>
                <li>Recovery</li>
                <li>Cloud</li>
                <li>Contact</li>
                <button>Sign in</button>
            </ul>
            <div className='hamburger'onClick={handleNav}>
                <FaBars className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar