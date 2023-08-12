import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";

export const Dialogs = () => {
    return (
        <div>
            <h3>Dialogs</h3>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem id={"1"} nameItem={"EgaHazin"}/>
                    <DialogItem id={"2"} nameItem={"Nelly"}/>
                    <DialogItem id={"3"} nameItem={"Gulbahor"}/>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
        </div>
    );
};