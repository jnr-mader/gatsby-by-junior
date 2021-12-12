import * as React from 'react'
import { navi } from './style.module.scss'
import { Link } from 'gatsby'

const Navigation = () => {
    return (
        <nav className={navi}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
        </nav> 
    )
  }
  
  export default Navigation;