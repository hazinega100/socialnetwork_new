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
import {RootState} from "./store/store";
import {DialogItemType, MessageType, PostType} from "./Types/types";

function App() {
    const posts = useSelector<RootState, PostType[]>(state => state.stateReducer.profilePage.posts)
    const dialogs = useSelector<RootState, DialogItemType[]>(state => state.stateReducer.dialogsPage.dialogs)
    const messages = useSelector<RootState, MessageType[]>(state => state.stateReducer.dialogsPage.messages)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Profile posts={posts} />} />
                        <Route path='/dialogs' element={<Dialogs dialogsData={dialogs}
                                                                 messagesData={messages}
                        />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
