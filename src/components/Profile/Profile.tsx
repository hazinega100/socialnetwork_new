import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileInitStateType} from "../../Types/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const profileImg = 'https://targetjobs.co.uk/static/0b3187ee346dcd5ce9cd0b7277afcbb5/a4e0a/fitness-centre-manager_1140x350.jpg'

type PropsType = {
    profilePage: ProfileInitStateType
}

export const Profile: FC<PropsType> = React.memo(({profilePage}) => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileImg} src={profileImg} alt="profileImg"/>
            </div>
            <ProfileInfo userProfile={profilePage.userProfile}/>
            <MyPostsContainer posts={profilePage.posts} />
        </div>
    );
})