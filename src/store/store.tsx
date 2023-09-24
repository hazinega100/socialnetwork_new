import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, Store} from "redux";
import dialogsReducer from "../reducers/dialogs-reducer";
import profileReducer from "../reducers/profile-reducer";
import sidebarReducer from "../reducers/sidebar-reducer";
import usersReducer from "../reducers/users-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<RootStateType, any, AnyAction>

export const store: Store<RootStateType> = legacy_createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store