import React from 'react';
import s from './Preloader.module.css'
import loader from "../../../assets/images/Spin-1s-200px.svg";

export const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={loader} alt="loader"/>
        </div>
    );
};