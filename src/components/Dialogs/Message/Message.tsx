import React, {FC} from 'react';
import s from './Message.module.css'
import {MessageType} from "../../../Types/types";

const Message: FC<MessageType> = ({message}) => {
    return (
        <div>
            <div className={s.message}>{message}</div>
        </div>
    );
};

export default Message;