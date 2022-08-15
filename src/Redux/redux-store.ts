import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from './profile-reducer.ts';
import dialogsReducer from './dialogs-reducer.ts';
import sidebarReducer from './sidebar-reducer.ts';
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import appReducer from './app-reducer.ts';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;

export default store;