import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Types/types";
import {useDispatch} from "react-redux";
import {followAC} from "../../actions/followAC";
import {unfollowAC} from "../../actions/unollowAC";
import Button from "@mui/material/Button";
import axios from "axios";
import {setUsersAC} from "../../actions/setUsersAC";

type PropsType = {
    users: UserType[]
}

const userPhoto: string = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"

export class UsersClass extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props);
        this.dispatch = useDispatch();
        axios(`https://social-network.samuraijs.com/api/1.0/users?_limit=10`)
            .then(data => {
                this.dispatch(setUsersAC(data.data.items))
            })
    }
    private dispatch: any;
    render() {
        return (
            <>
                <h3 className={s.title}>Friends</h3>
                <div className={s.users}>
                    {
                        this.props.users.map(u => {
                            const onClickHandler = () => {
                                if (!u.followed) {
                                    this.dispatch(followAC(u.id))
                                } else {
                                    this.dispatch(unfollowAC(u.id))
                                }
                            }
                            return (
                                <ul key={u.id}>
                                    <div className={s.user}>
                                        <div>
                                            <img className={s.user_img} src={u.photos.small != null ? u.photos.small : userPhoto}
                                                 alt="avatar"/>
                                            <li>{u.name}</li>
                                            <p>{u.status}</p>
                                        </div>
                                        <Button onClick={onClickHandler}
                                                variant="contained"
                                                color="success"
                                                size="small"
                                        >
                                            {u.followed ? "unfollow" : "follow"}
                                        </Button>
                                    </div>
                                </ul>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}