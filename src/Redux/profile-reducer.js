const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    posts: [
      { id: 1, name: "Hi,how are you", like: 1 },
      { id: 2, name: "it`s me first post", like: 22 },
      { id: 3, name: "Marik", like: 10 },
      { id: 4, name: "Vova", like: 44 },
    ],
    newPostText: '',
    profile: null,
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => {
  return {type: UPDATE_NEW_POST_TEXT,  newText: newText}
};
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export default profileReducer;