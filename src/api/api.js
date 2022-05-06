import axios from "axios"

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
    follow(userId) {
        return instance
            .post(
                `follow/${userId}`
            )
    },
    unfollow(userId) {
        return instance
            .delete(
                `follow/${userId}`
            )
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance
      .get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance
        .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance
        .put('/profile/status', {status})
    }
}

export const authAPI = {
    auth() {
        return instance
             .get(`auth/me`)
     },
    login(email, password, rememberMe = false) {
        return instance
             .post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance
             .delete('auth/login')
    }
}
// export const follow = () => {
//     return instance
//     .post(
//       `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//       {},
//       {
//         withCredentials: true,
//         headers: {
//           'API-KEY': '2db33cae-f456-4755-90ab-b9e9fb5ba545'
//         }
//       }
//     )
// }