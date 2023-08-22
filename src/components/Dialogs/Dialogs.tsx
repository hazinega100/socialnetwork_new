import React, {ChangeEvent, FC, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../Types/types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {addMessageAC} from "../../actions/addMessageAC";

type DialogsType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

export const Dialogs: FC<DialogsType> = ({dialogsData, messagesData}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const addMessage = () => {
        dispatch(addMessageAC(value))
        setValue('')
    }
    return (
        <div>
            <h3>Dialogs</h3>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsData.map(item => <DialogItem key={item.id} id={item.id} name={item.name}/>)}
                </div>
                <div className={s.messages}>
                    <TextField id="filled-basic"
                               value={value}
                               onChange={onChangeHandler}
                               label="Message"
                               variant="filled"
                    />
                    <div>
                        <Button variant="contained"
                                color="success"
                                onClick={addMessage}
                        >
                            Send Message
                        </Button>
                    </div>
                    {messagesData.map((m,index) => <Message key={index} message={m.message} />)}
                </div>
            </div>
        </div>
    );
};