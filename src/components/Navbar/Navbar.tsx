import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? s.active : s.item}
                                 to="/dialogs">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? s.active : s.item}
                                 to="/settings">Setting</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};