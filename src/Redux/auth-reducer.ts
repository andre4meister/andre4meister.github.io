// @ts-ignore
import {authAPI, ResultCodeForCaptcha, ResultCodes, securityAPI} from "../api/api.ts";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

type ActionsType = setAuthUserDataActionType | getCaptchaUrlSuccessActionType
const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL:
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number
        email: string
        login: string
        isAuth: boolean
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string | null
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL,
    captchaUrl
});


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const auth = (id?: number, email?: string, login?: string, rememberMe?: boolean): ThunkType => async (dispatch) => {
    let response = await authAPI.auth()
    if (response.data.resultCode === ResultCodes.Success) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodes.Success) {
        await dispatch(auth());
    } else {
        if (response.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl());
        }
        // let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        // dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === ResultCodes.Success) {
        await dispatch(auth(null, null, null, false));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}
export default authReducer;