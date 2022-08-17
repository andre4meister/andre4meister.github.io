// @ts-ignore
import {usersAPI} from "../api/api.ts";
import {updateObjectInArray} from '../utils/object-helpers'
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};
type initialStateType = typeof initialState;
const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u, followed: true
                //         }
                //     }
                //     return u;
                // }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state
    }
}

type  ActionsType = InferActionsTypes<typeof actions>
export const actions = {
    followSuccess: (userId: number) => ({type: FOLLOW, userId} as const),
    unfollowSuccess: (userId: number) => {
        return {type: UNFOLLOW, userId} as const
    },
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const),
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

export const changeFollowStatus = async (dispatch: Dispatch<ActionsType>,
                                         userId: number,
                                         apiMethod: any,
                                         actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await changeFollowStatus(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    };
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await changeFollowStatus(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}

export default usersReducer;