import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../Types/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
const profileImg = 'https://targetjobs.co.uk/static/0b3187ee346dcd5ce9cd0b7277afcbb5/a4e0a/fitness-centre-manager_1140x350.jpg'

type PropsType = {
    posts: PostType[]
}

export const Profile: FC<PropsType> = ({posts}) => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileImg} src={profileImg} alt="profileImg"/>
            </div>
            <ProfileInfo />
            <MyPostsContainer posts={posts}/>
        </div>
    );
};