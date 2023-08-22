import {combineReducers, legacy_createStore, Store} from "redux";
import reducer from "../reducers/reducer";

const rootReducer = combineReducers({
    stateReducer: reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store: Store<RootState> = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store