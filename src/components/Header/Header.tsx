import React, {useEffect} from 'react';
import s from './Header.module.css'
import logo from '../../logo.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AuthStateType} from "../../Types/types";
import {setAuthUserDataTC} from "../../actions/ThankActions/setAuthUserDataTC";
import {AppDispatchType} from "../../store/store";
import styled from "styled-components";

type PropsType = {
    auth: AuthStateType
}

export const Header = ({auth}: PropsType) => {
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
                {auth.isAuth
                    ?
                    <h3>{auth.login}</h3>
                    :
                    <LogIn auth={auth}/>}
            </div>
        </div>
    );
};

const LogIn = ({auth}: PropsType) => {
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