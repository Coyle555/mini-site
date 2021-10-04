import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar font-link'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Golf Outing <i className='fas fa-golf-ball' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-solid fa-xing' : "fa fa-solid fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/agenda' className='nav-links' onClick={closeMobileMenu}>
                                Agenda
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
