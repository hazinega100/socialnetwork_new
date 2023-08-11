import React from 'react';
import s from './Profile.module.css'
import {Posts} from "../Posts/Posts";
import {Person} from "../Person/Person";
const profileImg = 'https://targetjobs.co.uk/static/0b3187ee346dcd5ce9cd0b7277afcbb5/a4e0a/fitness-centre-manager_1140x350.jpg'

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileImg} src={profileImg} alt="profileImg"/>
            </div>
            <Person />
            <Posts />
        </div>
    );
};