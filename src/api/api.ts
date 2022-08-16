import axios from "axios"
import {ProfileType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '2db33cae-f456-4755-90ab-b9e9fb5ba545'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance
            .post(
                `follow/${userId}`
            )
    },
    unfollow(userId: number) {
        return instance
            .delete(
                `follow/${userId}`
            )
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance
      .get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance
        .get(`profile/status/${userId}`)
    },
    updateStatus(status: string | null) {
        return instance
        .put('/profile/status', {status})
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file)
        return instance
        .put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-Data' 
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance
        .put('/profile', profile)
    }
}


type AuthType = {
    data: {
        id: number
        login: string
        email: string
    }
    resultCode: ResultCodes
    messages: string[]
}
export enum ResultCodes {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
type LoginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodes | ResultCodeForCaptcha
    messages: string[]
}

export const authAPI = {
    auth() {
        return instance
             .get<AuthType>(`auth/me`)
     },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance
             .post<LoginType>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance
             .delete('auth/login')
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance
             .get(`security/get-captcha-url`)
    }
}
