import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {AuthStateType, DialogItemType, MessageType, ProfileInitStateType, UserType} from "./Types/types";
import {Users} from "./components/Users/Users";

function App() {
    const profilePage = useSelector<RootStateType, ProfileInitStateType>(state => state.profilePage)
    const dialogs = useSelector<RootStateType, DialogItemType[]>(state => state.dialogsPage.dialogs)
    const messages = useSelector<RootStateType, MessageType[]>(state => state.dialogsPage.messages)
    const users = useSelector<RootStateType, UserType[]>(state => state.usersPage.users)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<RootStateType, number>(state => state.usersPage.currentPage)
    const totalUsersCount = useSelector<RootStateType, number>(state => state.usersPage.totalUsersCount)
    const isFetching = useSelector<RootStateType, boolean>(state => state.usersPage.isFetching)
    const auth = useSelector<RootStateType, AuthStateType>(state => state.auth)

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header auth={auth}/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element={<Profile profilePage={profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={dialogs}
                                                                   messagesData={messages}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/users' element={<Users users={users}
                                                             pageSize={pageSize}
                                                             currentPage={currentPage}
                                                             totalUsersCount={totalUsersCount}
                                                             isFetching={isFetching}
                                                             auth={auth.isAuth}
                        />}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
