import React from 'react';
import s from './Post.module.css'

type PropsType = {
    postMessage: string | null
    backgroundColor: string
    rightPosition: boolean
}

export const Post = ({postMessage, backgroundColor, rightPosition}: PropsType) => {
    return (
        <div className={s.post}>
            <div className={s.post_avatar} style={{backgroundColor}}></div>
            <div className={s.post_message}>{postMessage}</div>
        </div>
    );
};