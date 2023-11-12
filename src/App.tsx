import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProfilePage} from "./components/Profile/Profile";
import {DialogsPage} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {AuthStateType, UserType} from "./Types/types";
import {UsersPage} from "./components/Users/Users";
import {Login} from "./components/Login/Login";

function App() {
    const users = useSelector<RootStateType, UserType[]>(state => state.usersPage.users)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<RootStateType, number>(state => state.usersPage.currentPage)
    const totalUsersCount = useSelector<RootStateType, number>(state => state.usersPage.totalUsersCount)
    const isFetching = useSelector<RootStateType, boolean>(state => state.usersPage.isFetching)
    const followingProgress = useSelector<RootStateType, number[]>(state => state.usersPage.followingInProgress)
    const auth = useSelector<RootStateType, AuthStateType>(state => state.auth)

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header auth={auth} users={users}/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element={<ProfilePage />}/>
                        <Route path='/dialogs/*' element={<DialogsPage />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/users' element={<UsersPage users={users}
                                                             pageSize={pageSize}
                                                             currentPage={currentPage}
                                                             totalUsersCount={totalUsersCount}
                                                             isFetching={isFetching}
                                                             followingProgress={followingProgress}
                        />}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
