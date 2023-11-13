import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../Types/types";
import {News} from "../../News/News";
import {Status} from "../Status/Status";

const basePhoto = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"

type PropsType = {
    userProfile: ProfileUserType | null
}

export const ProfileInfo: FC<PropsType> = React.memo(({userProfile}) => {
    if (!userProfile) {
        return <News/>
    }
    return (
        <div className={s.profileInfo}>
            <img className={s.avatar} src={userProfile.photos.small !== null ? userProfile.photos.small : basePhoto} alt="avatar"/>
            <div className={s.description}>
                <h4>{userProfile.fullName}</h4>
                <Status userId={userProfile.userId}/>
                <div>About Me: {userProfile.aboutMe}</div>
                <div>YouTube: {userProfile.contacts.youtube}</div>
                <div>GitHub: {userProfile.contacts.github}</div>
                <div>Web Site: <a href={userProfile.contacts.website}>{userProfile.contacts.website}</a></div>
            </div>
        </div>
    );
})