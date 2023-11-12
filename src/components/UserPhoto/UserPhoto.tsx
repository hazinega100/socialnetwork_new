import React from 'react';
import s from './UserPhoto.module.css'
import {UserType} from "../../Types/types";

export const userPhoto: string = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"

type UserPhotoType =Pick<UserType, 'photos'>

export const UserPhoto: React.FC<UserPhotoType> = ({photos}: UserPhotoType) => {
    return (
        <img className={s.userPhoto}
             src={photos.small != null ? photos.small : userPhoto}
             alt="avatar"/>
    );
}