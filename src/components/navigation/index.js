import React, { useLayoutEffect, useState } from 'react';
import { navi, open, close } from './style.module.scss'
import { Link } from 'gatsby'

const Navigation = () => {
    
    const [isActive, setActive] = useState(false);
    let IsMobile = false

    const handleToggle = (e) => {
        e.preventDefault()
        if (IsMobile){
            setActive(!isActive);
        } 
    };

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                if(window.innerWidth > 1020) setActive(false);
                setSize([window.innerWidth]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
        
    (function IsMobileCheck() {
        const [width] = useWindowSize();
        if (width < 1020) {
            return IsMobile = true
        }   
    })()


    return (
        <nav className={`${navi} ${isActive ? open : ""}`} onClick={handleToggle}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li className={close}><a href='#' onClick={handleToggle}>Close</a></li>
        </nav> 
    )
  }
  
  export default Navigation;