import { usersAPI } from "../api/api";
import { updateObjectInArray } from '../utils/object-helpers'
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [
        //   { id: 1, photoUrl: 'https://i.imgur.com/AVaPsiy.jpg', followed: false, name: "Andrii", status: 'on project', location: {country: 'Ukraine', city: 'Lviv'} },
        //   { id: 2, photoUrl: 'https://i.imgur.com/AVaPsiy.jpg', followed: true,name: "Dima", status: 'without love', location: {country: 'Ukraine', city: 'Pavliv'} },
        //   { id: 3, photoUrl: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png', followed: false,name: "Roma", status: 'love et', location: {country: 'Ukraine', city: 'Yavoriv'} },
        //   { id: 4, photoUrl: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg', followed: true,name: "Vova", status: 'homeman', location: {country: 'Ukraine', city: 'Bilka'} },
        //   { id: 5, photoUrl: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png', followed: false,name: "Marik", status: 'smoke weed', location: {country: 'Ukraine', city: 'Lviv'} },
        //   { id: 6, photoUrl: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png', followed: true,name: "Yura", status: 'sportsman', location: {country: 'Ukraine', city: 'Sambir'} },
    ] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};
type initialStateType = typeof initialState;
const usersReducer = (state = initialState, action: any): initialStateType => {
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
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
    return { type: UNFOLLOW, userId }
}

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersActionType => ({ type: SET_USERS, users })

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });


type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const changeFollowStatus = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch) => {
        await changeFollowStatus(dispatch, userId, usersAPI.follow.bind(usersAPI),followSuccess)
    };
}

export const unfollow = (userId: number) => {
    return async (dispatch) => {
       await changeFollowStatus(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer;