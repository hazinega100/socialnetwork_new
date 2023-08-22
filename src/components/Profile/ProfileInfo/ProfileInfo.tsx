import React from 'react';
import s from "./ProfileInfo.module.css";

const avatar = 'https://cdn5.vectorstock.com/i/1000x1000/98/64/fitness-gym-logo-with-strong-athlete-and-barbell-vector-24189864.jpg'

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <div className={s.description}>
                <h4>EgaHazin</h4>
                <div>Data of Birth: 17 apr 1988</div>
                <div>City: SPb</div>
                <div>Education: KTT'09</div>
                <div>Web Site: <a href="https://egahazin.ru">https://egahazin.ru</a></div>
            </div>
        </div>
    );
};