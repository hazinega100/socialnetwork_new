import React, {useEffect} from 'react';
import s from './Users.module.css'
import {UserType} from "../../Types/types";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {setUsersAC} from "../../actions/setUsersAC";
import {setPagesAC} from "../../actions/setPagesAC";
import {setCurrentPageAC} from "../../actions/setCurrentPageAC";
import {AppDispatchType, RootStateType} from "../../store/store";
import {setIsFetchingAC} from "../../actions/setIsFetchingAC";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {setUserProfileTC} from "../../reducers/profile-reducer";
import {followTC} from "../../actions/ThankActions/followTC";
import {unfollowTC} from "../../actions/ThankActions/unfollowTC";
import {usersApi} from "../../api/usersApi";
import {followingProgressAC} from "../../actions/followingProgressAC";
import {UserPhoto} from "../UserPhoto/UserPhoto";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingProgress: number[]
}

const Users = ({users, pageSize, currentPage, totalUsersCount, isFetching, followingProgress}: PropsType) => {
    const auth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
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
        usersApi.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                dispatch(setPagesAC(response.data.totalCount))
                dispatch(setIsFetchingAC(false))
            })
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
                {isFetching ? <Preloader/> : null}
                {
                    users.map(u => {
                        const onClickFollow = () => {
                            dispatch(followTC(u.id))
                            dispatch(followingProgressAC(u.id, true))
                        }
                        const onClickUnfollow = () => {
                            dispatch(unfollowTC(u.id))
                            dispatch(followingProgressAC(u.id, true))
                        }
                        return (
                            <ul key={u.id}>
                                <li className={isFetching ? s.users : s.user}>
                                    <div>
                                        <NavLink to={`/profile/${u.id}`} onClick={() => openProfileUser(u.id)}>
                                            <UserPhoto photos={u.photos} />
                                            <h4>{u.name}</h4>
                                        </NavLink>
                                        <p>{u.status}</p>
                                    </div>
                                    {!u.followed
                                        ? <Button onClick={onClickFollow}
                                                  variant="contained"
                                                  color="success"
                                                  size="small"
                                                  disabled={!auth || followingProgress.some(id => id === u.id)}
                                        >
                                            Follow
                                        </Button>
                                        : <Button onClick={onClickUnfollow}
                                                  variant="contained"
                                                  color="error"
                                                  size="small"
                                                  disabled={!auth || followingProgress.some(id => id === u.id)}
                                        >
                                            Unfollow
                                        </Button>
                                    }
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    );
};

export const UsersPage = withAuthRedirect(Users)