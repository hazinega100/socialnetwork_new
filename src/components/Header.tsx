import React from 'react';
import s from './Header.module.css'
import logo from '../logo.png'

export const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <a href="#"><img className={s.headerImg} src={logo} alt="logo"/></a>
            </div>
            <div>
                <a className={s.headerLogIn} href='#'>Log In</a>
            </div>
        </div>
    );
};