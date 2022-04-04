const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    //   { id: 1, photoUrl: 'https://i.imgur.com/AVaPsiy.jpg', followed: false, name: "Andrii", status: 'on project', location: {country: 'Ukraine', city: 'Lviv'} },
    //   { id: 2, photoUrl: 'https://i.imgur.com/AVaPsiy.jpg', followed: true,name: "Dima", status: 'without love', location: {country: 'Ukraine', city: 'Pavliv'} },
    //   { id: 3, photoUrl: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png', followed: false,name: "Roma", status: 'love et', location: {country: 'Ukraine', city: 'Yavoriv'} },
    //   { id: 4, photoUrl: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg', followed: true,name: "Vova", status: 'homeman', location: {country: 'Ukraine', city: 'Bilka'} },
    //   { id: 5, photoUrl: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png', followed: false,name: "Marik", status: 'smoke weed', location: {country: 'Ukraine', city: 'Lviv'} },
    //   { id: 6, photoUrl: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png', followed: true,name: "Yura", status: 'sportsman', location: {country: 'Ukraine', city: 'Sambir'} },
    ],
  };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                       return {
                           ...u, followed: true
                       }
                    }
                    return u;
                }), 
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                       return {
                           ...u, followed: false
                       }
                    }
                    return u;
                }), 
            }
        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ]}
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => {
  return {type: UNFOLLOW, userId}
}
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;