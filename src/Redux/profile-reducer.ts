// @ts-ignore
import { profileAPI, usersAPI } from "../api/api.ts";
import {PostType, ProfileType, PhotosType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SET_PHOTO = 'SET_PHOTO';
// const UPDATE_PROFILE = 'UPDATE_PROFILE';

let initialState = {
  posts: [
    { id: 1, name: "Hi,how are you", like: 1 },
    { id: 2, name: "it`s my first post", like: 22 },
    { id: 3, name: "Marik", like: 10 },
    { id: 4, name: "Vova", like: 44 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
};
type initialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        name: action.newPostText,
        like: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter(post => post.id !== action.id) }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case UPDATE_STATUS: {
      return { ...state, }
    }
    case SET_PHOTO: {
      return {...state, profile: {...state.profile, ...state.profile.photos, large: action.file, small: action.file} as ProfileType}
    }
    default:
      return state
  }
}

type ActionsType = savePhotoSuccessActionType | addPostActionType | deletePostActionType | setUserProfileActionType
  | setStatusActionType
// export const saveProfileSuccess = (profile) => ({type: UPDATE_PROFILE, profile})
type savePhotoSuccessActionType = {
  type: typeof SET_PHOTO
  file: PhotosType
}
export const savePhotoSuccess = (file: any): savePhotoSuccessActionType => ({type: SET_PHOTO, file})

type addPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): addPostActionType => ({ type: ADD_POST, newPostText });

type deletePostActionType = {
  type: typeof DELETE_POST
  id: number
}
export const deletePost = (id: number): deletePostActionType => ({ type: DELETE_POST, id });

type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type setStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): setStatusActionType => ({ type: SET_STATUS, status });



type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.file));
  }
};


export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  // @ts-ignore
  const userId= getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
     await dispatch(getUserProfile(userId));
  } else {
    // dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
  }
  return Promise.reject(response.data.messages[0]);
};

export default profileReducer;