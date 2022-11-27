import React, { useState, useEffect } from 'react';
import navbarStyles from './navbar.module.css'

const Navbar = () => {
    const [scheme, setScheme] = useState('');

    useEffect(() => {
        if (scheme == '') {
            setScheme(localStorage.getItem('scheme'));
        }
        document.documentElement.setAttribute('scheme', scheme);
    })

    const handleChangeScheme = () => {
        let colorScheme = scheme == 'dark' ? 'light' : 'dark';
        localStorage.setItem('scheme', colorScheme);
        setScheme(colorScheme);
    }

    return <nav className={navbarStyles.navbar} id='navbar'>
        <h1>Blog</h1>
        <button className={navbarStyles.btnTheme}
            onClick={handleChangeScheme} title='Change theme'>
            {scheme == 'dark'? '🌞': '🌚'}</button>
    </nav>
}

export default Navbar;