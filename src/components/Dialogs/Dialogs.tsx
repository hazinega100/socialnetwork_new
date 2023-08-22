import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../Types/types";

type DialogsType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

export const Dialogs: FC<DialogsType> = ({dialogsData, messagesData}) => {
    return (
        <div>
            <h3>Dialogs</h3>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsData.map(item => <DialogItem key={item.id} id={item.id} name={item.name}/>)}
                </div>
                <div className={s.messages}>
                    {messagesData.map((m,index) => <Message key={index} message={m.message} />)}
                </div>
            </div>
        </div>
    );
};