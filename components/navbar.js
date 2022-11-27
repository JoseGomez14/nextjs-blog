import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import navbarStyles from './navbar.module.css'

const Navbar = () => {
    const [scheme, setScheme] = useState('');

    useEffect(() => {
        if (scheme == '') {
            setScheme(localStorage.getItem('scheme'));
        }
        document.documentElement.setAttribute('scheme', scheme);
    }, [scheme])

    const handleChangeScheme = () => {
        let colorScheme = scheme == 'dark' ? 'light' : 'dark';
        localStorage.setItem('scheme', colorScheme);
        setScheme(colorScheme);
    }

    return <nav className={navbarStyles.navbar} id='navbar'>
        <Link href='/' className={navbarStyles.brand}><h1>👨‍💻Jose G</h1></Link>
        <ul className={navbarStyles.listActions}>
            <li>
                <button onClick={handleChangeScheme} title='Change theme'>
                    {scheme == 'dark' ? '🌞' : '🌚'}</button>
            </li>
            <li>
                <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">📹</a>
            </li>
            <li>
                <a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer">📞</a>
            </li>
            <li>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">📺</a>
            </li>
        </ul>
    </nav>
}

export default Navbar;