import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    posts: [
      { id: 1, name: "Hi,how are you", like: 1 },
      { id: 2, name: "it`s me first post", like: 22 },
      { id: 3, name: "Marik", like: 10 },
      { id: 4, name: "Vova", like: 44 },
    ],
    newPostText: '',
    profile: null,
    status: '',
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 2,
                name: state.newPostText,
                like: 2
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy
          }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
          return {...state, status: action.status}
        }
        case UPDATE_STATUS: {
          return {...state, }
        }
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => {
  return {type: UPDATE_NEW_POST_TEXT,  newText: newText}
};
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then((response) => {
        dispatch(setStatus(response.data));
      });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then((response) => {
        if(response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
  }
}
export default profileReducer;