import React, {ChangeEvent, FC, useState} from 'react';
import {PostType} from "../../../Types/types";
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../actions/addPostAC";
import {MyPosts} from "./MyPosts";

type PropsType = {
    posts: PostType[]
}

export const MyPostsContainer: FC<PropsType> = ({posts}) => {
    const dispatch = useDispatch()
    const [backgroundColor, setBackgroundColor] = useState<string>('#61dafb');
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const addPost = () => {
        dispatch(addPostAC(backgroundColor, value))
        // random backgroundColor
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBackgroundColor(randomColor);
        setValue('')
    }


    return <MyPosts posts={posts}
                    value={value}
                    onChange={onChangeHandler}
                    addPost={addPost}
    />
};