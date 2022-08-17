import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// @ts-ignore
import profileReducer from './profile-reducer.ts';
// @ts-ignore
import dialogsReducer from './dialogs-reducer.ts';
// @ts-ignore
import sidebarReducer from './sidebar-reducer.ts';
// @ts-ignore
import usersReducer from "./users-reducer.ts";
// @ts-ignore
import authReducer from "./auth-reducer.ts";
// @ts-ignore
import appReducer from './app-reducer.ts';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
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