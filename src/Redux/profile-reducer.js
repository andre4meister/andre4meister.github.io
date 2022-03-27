const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
      { id: 1, name: "Hi,how are you", like: 1 },
      { id: 2, name: "it`s me first post", like: 22 },
      { id: 3, name: "Marik", like: 10 },
      { id: 4, name: "Vova", like: 44 },
    ],
    newPostText: '',
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2,
                name: state.newPostText,
                like: 2
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => {
  return {type: UPDATE_NEW_POST_TEXT,  newText: newText}
}
export default profileReducer;