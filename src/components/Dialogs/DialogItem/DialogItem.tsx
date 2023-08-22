import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import {DialogItemType} from "../../../Types/types";

export const DialogItem: FC<DialogItemType> = ({id, name}) => {
    const path = `/dialogs/${id}`
    return (
        <ul>
            <li><NavLink className={s.item + ' ' + s.active} to={path}>{name}</NavLink></li>
        </ul>
    )
}