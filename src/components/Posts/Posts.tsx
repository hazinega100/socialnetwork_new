import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './Posts.module.css'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Post} from "./Post/Post";
import {v1} from "uuid";

type PostsType = {
    id: string
    avatar: string
    message: string | null
}

type PropsType = {
    callback: () => void
}

export const Posts = ({callback}: PropsType) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('#61dafb');
    const [value, setValue] = useState<string>('')
    const [posts, setPosts] = useState<PostsType[]>([])
    const [rightPosition, setRightPosition] = useState<boolean>(true)

    const onChangHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const pushPost = () => {
        // const newPost = localStorage.getItem('post')
        const newPost: PostsType = {id: v1(), avatar: backgroundColor, message: value}
        setPosts([...posts, newPost])
        // random backgroundColor
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBackgroundColor(randomColor);
        setValue('')
        if (rightPosition) {
            setRightPosition(false)
        } else {
            setRightPosition(true)
        }
    }
    const pressEnterKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code == 'Enter') {
            pushPost()
        }
    }
    return (
        <div className={s.posts}>
            <h3 className={s.posts_title}>My posts</h3>
            <div>
                <TextField className={s.posts_text_field}
                           value={value}
                           onChange={onChangHandler}
                           onKeyPress={pressEnterKey}
                           id="filled-basic"
                           label="Your news"
                           variant="filled"
                />
            </div>
            <div className={s.posts_btn}>
                <Button variant="contained"
                        color="success"
                        onClick={pushPost}
                >
                    Send
                </Button>
            </div>
            {posts.map(p => {
                return <Post rightPosition={rightPosition} key={p.id} postMessage={p.message} backgroundColor={p.avatar}/>
            })}
        </div>
    );
};