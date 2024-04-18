// NavBar.jsx
import React, { useState, useEffect } from 'react';
import s from './NavBar.module.css';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
    {screenWidth < 768 ? 
        (
            <div className={s.navContainer}>
                <h4 className={s.title}>Brainwave.io</h4>
                <button className={s.button} onClick={() => setOpenMenu(!openMenu)}>
                    <Icon className={s.icon} icon="gravity-ui:bars" width="36" height="36" style={{ color: '#000000' }} />
                </button>
                <div className={openMenu ? s.menuOpen : s.menuClose}>
                    <NavLink className={openMenu ? s.link : s.linkClose} to='/sign-up'>Demos</NavLink>
                    <NavLink className={openMenu ? s.link : s.linkClose} to='/sign-up'>Pages</NavLink>
                    <NavLink className={openMenu ? s.link : s.linkClose} to='/sign-up'>Support</NavLink>
                    <NavLink className={openMenu ? s.link : s.linkClose} to='/sign-up'>Contact</NavLink>
                    <NavLink className={openMenu ? s.link : s.linkClose} to='/sign-up'>Login</NavLink>
                </div>
            </div>
        ) 
        : 
        (
            <div className={s.navContainer}>
                <h4 className={s.title}>Brainwave.io</h4>
                <div className={s.linksContainer}>
                    <NavLink className={s.link} to='/sign-up'>Demos</NavLink>
                    <NavLink className={s.link} to='/sign-up'>Pages</NavLink>
                    <NavLink className={s.link} to='/sign-up'>Support</NavLink>
                    <NavLink className={s.link} to='/sign-up'>Contact</NavLink>
                    <NavLink className={s.link} to='/sign-up'>Log In</NavLink>
                </div>
            </div>
        )
    }
</>

    );
};
