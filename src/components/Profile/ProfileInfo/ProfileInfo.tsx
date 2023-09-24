import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../Types/types";

const basePhoto = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"

type PropsType = {
    userProfile: ProfileUserType | null
}

export const ProfileInfo: FC<PropsType> = React.memo(({userProfile}) => {
    if (!userProfile) {
        return null
    }
    return (
        <div className={s.profileInfo}>
            <img className={s.avatar} src={userProfile.photos.large !== null ? userProfile.photos.large : basePhoto} alt="avatar"/>
            <div className={s.description}>
                <h4>{userProfile.fullName}</h4>
                <div>About Me: {userProfile.aboutMe}</div>
                <div>City: SPb</div>
                <div>Education: KTT'09</div>
                <div>Web Site: <a href={userProfile.contacts.website}>{userProfile.contacts.website}</a></div>
            </div>
        </div>
    );
})