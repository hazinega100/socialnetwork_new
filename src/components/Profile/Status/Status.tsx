import React, {useEffect} from 'react';
import {EditableSpan} from "../../EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, RootStateType} from "../../../store/store";
import {getStatus} from "../../../reducers/profile-reducer";

type PropsType = {
    userId: number
}

export const Status = ({userId}: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const status = useSelector<RootStateType, string>(state => state.profilePage.status)
    useEffect(() => {
        dispatch(getStatus(userId))
    }, [])
    return <EditableSpan status={status} />
};