// @ts-ignore
import { auth } from "./auth-reducer.ts";
import {Dispatch} from "redux";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state= initialState, action: InitializedSuccessActionType ): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}
export const initializedSuccess = ():InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: Dispatch<InitializedSuccessActionType>) => {
    let promise = dispatch(auth());
    Promise.all(([promise]))
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;