import React, {useEffect} from 'react';
import s from './Header.module.css'
import logo from '../../logo.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AuthStateType, ProfileUserType, UserType} from "../../Types/types";
import {setAuthUserDataTC} from "../../actions/ThankActions/setAuthUserDataTC";
import {AppDispatchType, RootStateType} from "../../store/store";
import styled from "styled-components";
import {UserPhoto} from "../UserPhoto/UserPhoto";
import {setUserProfileTC} from "../../reducers/profile-reducer";

type PropsType = {
    auth: AuthStateType
    users?: UserType[]
}

export const Header = ({auth, users}: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    useEffect(() => {
        dispatch(setAuthUserDataTC())
    }, [])
    return (
        <div className={s.header}>
            <div>
                <a href="src/components/Header/Header#"><img className={s.headerImg} src={logo} alt="logo"/></a>
            </div>
            <div>
                {
                    auth.isAuth
                        ?
                        <ProfileLogin auth={auth} users={users}/>
                        :
                        <LoginLink auth={auth}/>
                }
            </div>
        </div>
    );
}

const ProfileLogin = ({auth}: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const userProfile = useSelector<RootStateType, ProfileUserType | null>(state => state.profilePage.userProfile)
    useEffect(()=>{
        auth.id && dispatch(setUserProfileTC(auth.id))
    }, [])

    if (userProfile) {
        return (
            <div className={s.headerLoginWrapper}>
              <UserPhoto photos={userProfile.photos}  />
                <LogInStyled>
                    <h3>{auth.login}</h3>
                </LogInStyled>
            </div>
        )
    } else {
        return (
            <div className={s.headerLoginWrapper}>
                <p>Пользователь не найден</p>
            </div>
        );
    }

}

const LoginLink = ({auth}: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const onAuthHandler = () => {
        dispatch(setAuthUserDataTC())
    }
    return (
        <LogInStyled>
            <h3>{auth.messages}</h3>
            <NavLink
                to='/login'
                onClick={onAuthHandler}
            >
                Log In
            </NavLink>
        </LogInStyled>
    );
}

const LogInStyled = styled.a`
  font-weight: bold;
  font-size: 24px;
  color: white;
  text-decoration: none;
  cursor: pointer;

  :hover {
    transition: all .5s;
    color: #61dafb;
  }
`