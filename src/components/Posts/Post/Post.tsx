import React, {useState} from 'react';
import s from './Post.module.css'
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type PropsType = {
    postMessage: string | null
    backgroundColor: string
}

export const Post = ({postMessage, backgroundColor}: PropsType) => {
    const [likeCount, setLikeCount] = useState<number>(0)
    const onClickHandler = () => {
        setLikeCount(likeCount + 1)
    }
    return (
        <div className={s.post}>
            <div className={s.post_avatar} style={{backgroundColor}}></div>
            <div className={s.post_message}>{postMessage}</div>
            <IconButton className={s.like_btn} onClick={onClickHandler} aria-label="like" size="small">
                <ThumbUpIcon />
            </IconButton>
            <span className={s.like_counter}>{likeCount}</span>
        </div>
    );
};