import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

let initialState = {
  posts: [
    { id: 1, name: "Hi,how are you", like: 1 },
    { id: 2, name: "it`s my first post", like: 22 },
    { id: 3, name: "Marik", like: 10 },
    { id: 4, name: "Vova", like: 44 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
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
      return {...state, profile: {...state.profile, ...state.profile.photos, large: action.file, small: action.file}}
    }
    default:
      return state
  }
}
export const saveProfileSuccess = (profile) => ({type: UPDATE_PROFILE, profile})
export const savePhotoSuccess = (file) => ({type: SET_PHOTO, file})
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (id) => ({ type: DELETE_POST, id });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}


export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.file));
  }
};


export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId= getState().auth.userId;
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
  }
  return Promise.reject(response.data.messages[0]);
};

export default profileReducer;