
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'
const NavBar = ({ name, ArrayLinks , changeMode , mode }) => {
    const[showMenu , setShowMenu] = useState(false)
    return (
        <>
        <nav className={mode ? "nav-dark-mode" : ""}>
            <h2 className='myname'>{name}</h2>
            <div className="links">
                {ArrayLinks.map((link, index) => {
                    return (
                        <Link to={link.to} smooth={true} duration={500} spy={true} activeClass='active'><p>{link.content}</p></Link>
                    )
                })}
            </div>
            <img className='changeMode' src={mode? "/personal-portfolio/icons/sun.png" : "/personal-portfolio/icons/moon.png"} alt="" onClick={()=>changeMode(!mode)}/>
            <svg className='bars' onClick={()=> setShowMenu(!showMenu)} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </nav>
        <div className={`${showMenu?'show-menu':'close-menu'} ${mode? 'menu-dark-mode' : ''}`} onClick={()=> setShowMenu(!showMenu)}>
            <div className="menu">
                {ArrayLinks.map((link, index) => {
                    return (
                        <Link to={link.to} smooth={true} duration={500} spy={true} activeClass='active'><p>{link.content}</p></Link>
                    )
                })}
                {mode?<div className='theme'onClick={()=>changeMode(!mode)}>
                    <p className='curent-mode-name'>Light mode</p>
                    <img src="/personal-portfolio/icons/sun.png" alt="" className='curent-mode-img'/>
                </div>:<div className='theme'onClick={()=>changeMode(!mode)}>
                    <p className='curent-mode-name'>Dark mode</p>
                    <img src="/personal-portfolio/icons/moon.png" alt="" className='curent-mode-img'/>
                </div>}
            </div>
        </div>
        </>
    )
}

export default NavBar

