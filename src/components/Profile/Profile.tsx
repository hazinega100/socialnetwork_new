import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileInitStateType} from "../../Types/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import wave from "../../images/wave.jpeg"

const profileImg = 'https://targetjobs.co.uk/static/0b3187ee346dcd5ce9cd0b7277afcbb5/a4e0a/fitness-centre-manager_1140x350.jpg'

type PropsType = {

}

const Profile: FC<PropsType> = React.memo(() => {
    const profilePage = useSelector<RootStateType, ProfileInitStateType>(state => state.profilePage)
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileImg} src={wave} alt="profileImg"/>
            </div>
            <ProfileInfo userProfile={profilePage.userProfile}/>
            <MyPostsContainer posts={profilePage.posts} />
        </div>
    );
})
export const ProfilePage =  withAuthRedirect(Profile)