import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Post} from "./Post/Post";
import {PostType} from "../../../Types/types";

type PropsType = {
    posts: PostType[]
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    addPost: () => void
}

export const MyPosts: FC<PropsType> = ({posts, addPost, onChange, value}) => {
    const pressEnterKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter') {
            addPost()
        }
    }
    return (
        <div className={s.myPosts}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div>
                <TextField className={s.myPostsTextField}
                           value={value}
                           onChange={onChange}
                           onKeyPress={pressEnterKey}
                           id="filled-basic"
                           label="Your news"
                           variant="filled"
                />
            </div>
            <div className={s.myPostsBtn}>
                <Button variant="contained"
                        color="success"
                        onClick={addPost}
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