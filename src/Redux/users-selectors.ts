import {AppReducerType} from "./redux-store";

export const getAllUsers = (state: AppReducerType): [] => {
    return state.usersPage.users
};

export const getPageSize = (state: AppReducerType): number => {
    return state.usersPage.pageSize
};

export const getTotalUsersCount = (state: AppReducerType): number => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state: AppReducerType): number => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state: AppReducerType): boolean => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state: AppReducerType): [] => {
    return state.usersPage.followingInProgress
};