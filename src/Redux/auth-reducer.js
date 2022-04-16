const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case TOGGLE_IS_AUTH:
            return { ...state, isAuth: action.isAuth };
            
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });

export const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth });

export default authReducer;