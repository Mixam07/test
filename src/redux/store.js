import { combineReducers, createStore } from "redux";
import settingsReducer from "./reducers/settings-reducer";

let reducers = combineReducers({ settingsReducer });

let store = createStore(reducers);

export default store;
window.store = store;