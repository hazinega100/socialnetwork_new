import {combineReducers, legacy_createStore, Store} from "redux";
import postsReducer from "../reducers/postsReducer";
import dialogsReducer from "../reducers/dialogsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    dialogs: dialogsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store: Store<RootState> = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store