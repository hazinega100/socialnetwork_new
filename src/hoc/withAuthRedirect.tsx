import React, {FunctionComponent} from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {Navigate} from "react-router-dom";

export const withAuthRedirect = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T) => {
        const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    };
}