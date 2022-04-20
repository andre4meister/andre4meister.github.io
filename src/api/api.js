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