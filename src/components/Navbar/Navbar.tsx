import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Setting</li>
                </ul>
            </nav>
        </div>
    );
};