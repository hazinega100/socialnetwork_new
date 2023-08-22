import React from 'react';
import s from './Post.module.css'
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useDispatch} from "react-redux";
import {incrLikeCounterAC} from "../../../../actions/incrLikeCounterAC";

type PropsType = {
    id: string
    postMessage: string | null
    backgroundColor: string
    likeCounter: number
}

export const Post = ({id, postMessage, backgroundColor, likeCounter}: PropsType) => {
    const dispatch = useDispatch()
    // const [likeCount, setLikeCount] = useState<number>(0)
    const onClickHandler = () => {
        // setLikeCount(likeCount + 1)
        dispatch(incrLikeCounterAC(id, likeCounter))
    }
    return (
        <div className={s.post}>
            <div className={s.post_avatar} style={{backgroundColor}}></div>
            <div className={s.post_message}>{postMessage}</div>
            <IconButton className={s.like_btn} onClick={onClickHandler} aria-label="like" size="small">
                <ThumbUpIcon />
            </IconButton>
            <span className={s.like_counter}>{likeCounter}</span>
        </div>
    );
};