import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

type DialogItemPropsType = {
    id: string
    nameItem: string
}

export const DialogItem = ({id, nameItem}: DialogItemPropsType) => {
    const path = `/dialogs/${id}`
    return (
        <ul>
            <li><NavLink className={s.item + ' ' + s.active} to={path}>{nameItem}</NavLink></li>
        </ul>
    )
}