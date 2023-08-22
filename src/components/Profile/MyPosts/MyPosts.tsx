import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import s from './MyPosts.module.css'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Post} from "./Post/Post";
import {PostType} from "../../../Types/types";
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../actions/addPostAC";

type PropsType = {
    posts: PostType[]
}

export const MyPosts: FC<PropsType> = ({posts}) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('#61dafb');
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch()

    const onChangHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const pushPost = () => {
        // const newPost = localStorage.getItem('post')
        dispatch(addPostAC(backgroundColor, value))
        // random backgroundColor
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBackgroundColor(randomColor);
        setValue('')
    }
    const pressEnterKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter') {
            pushPost()
        }
    }
    return (
        <div className={s.myPosts}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div>
                <TextField className={s.myPostsTextField}
                           value={value}
                           onChange={onChangHandler}
                           onKeyPress={pressEnterKey}
                           id="filled-basic"
                           label="Your news"
                           variant="filled"
                />
            </div>
            <div className={s.myPostsBtn}>
                <Button variant="contained"
                        color="success"
                        onClick={pushPost}
                >
                    Send
                </Button>
            </div>
            {posts.map(p => {
                return <Post key={p.id}
                             id={p.id}
                             postMessage={p.message}
                             backgroundColor={p.avatar}
                             likeCounter={p.likeCount}/>
            })}
        </div>
    );
};