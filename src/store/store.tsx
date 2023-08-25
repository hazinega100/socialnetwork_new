import {combineReducers, legacy_createStore, Store} from "redux";
import postsReducer from "../reducers/postsReducer";
import dialogsReducer from "../reducers/dialogsReducer";
import sidebarReducer from "../reducers/sidebarReducer";

const rootReducer = combineReducers({
    profilePage: postsReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store: Store<RootState> = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store