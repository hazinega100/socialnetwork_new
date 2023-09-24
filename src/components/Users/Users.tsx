import React, {useEffect} from 'react';
import s from './Users.module.css'
import {UserType} from "../../Types/types";
import {useDispatch} from "react-redux";
import {followAC} from "../../actions/followAC";
import {unfollowAC} from "../../actions/unollowAC";
import Button from "@mui/material/Button";
import axios from "axios";
import {setUsersAC} from "../../actions/setUsersAC";
import {setPagesAC} from "../../actions/setPagesAC";
import {setCurrentPageAC} from "../../actions/setCurrentPageAC";
import {AppDispatchType} from "../../store/store";
import {setIsFetchingAC} from "../../actions/setIsFetchingAC";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {setUserProfileTC} from "../../reducers/profile-reducer";

type PropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}

const userPhoto: string = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"

export const Users = ({users, pageSize, currentPage, totalUsersCount, isFetching}: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const startIndex = 0
    const endIndex = 15

    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                dispatch(setPagesAC(response.data.totalCount))
                dispatch(setIsFetchingAC(false))
            })
        // dispatch(getUsersTC)
    }, [currentPage, totalUsersCount])

    const changePage = (p: number) => {
        dispatch(setCurrentPageAC(p))
    }

    const openProfileUser = (userID: number) => {
        dispatch(setUserProfileTC(userID))
    }

    return (
        <>
            <h3 className={s.title}>Users</h3>
            <div>
                {pages.slice(startIndex, endIndex).map((p, index) => {
                    return (
                        <span key={index}
                              className={p === currentPage ? s.current_page_active : s.current_page}
                              onClick={() => changePage(p)}
                        >
                        {p}
                        </span>
                    )
                })}
            </div>
            <div className={isFetching ? s.loader_center : ''}>
                {isFetching ? <Preloader /> : null}
                {
                    users.map(u => {
                        const onClickHandler = () => {
                            if (!u.followed) {
                                dispatch(followAC(u.id))
                            } else {
                                dispatch(unfollowAC(u.id))
                            }
                        }
                        return (
                            <ul key={u.id}>
                                <div className={isFetching ? s.users : s.user}>
                                    <div>
                                        <NavLink to={`/profile/${u.id}`} onClick={() => openProfileUser(u.id)}>
                                            <img className={s.user_img}
                                                 src={u.photos.small != null ? u.photos.small : userPhoto}
                                                 alt="avatar"/>
                                            <li>{u.name}</li>
                                        </NavLink>
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
    );
};