import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatus} from "../reducers/profile-reducer";
import {AppDispatchType} from "../store/store";

type PropsType = {
    status: string
}

export const EditableSpan: React.FC<PropsType> = ({status}) => {
    const dispatch = useDispatch<AppDispatchType>()
    const [mode, setMode] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateStatus(e.currentTarget.value))
    }
    const editMode = () => setMode(true)
    const viewMode = () => setMode(false)
    return (
        <div>
            {mode
                ?
                <input value={status} onChange={onChangeHandler} onBlur={viewMode} autoFocus />
                :
                <span onClick={editMode}>{status || 'Click to add status'}</span>}
        </div>
    );
}