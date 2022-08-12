
type FriendType = {
    id: number
    name: string
    ava: string
}
let initialState = [
    { id: 1, name: 'Dima', ava: 'https://i.imgur.com/AVaPsiy.jpg' },
    { id: 2, name: 'Vova', ava: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png' },
    { id: 3, name: 'Marik', ava: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg' },
    { id: 4, name: 'Roma', ava: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png' },
] as Array<FriendType>;

type initialStateType = typeof initialState
const sidebarReducer = (state = initialState, action: any): initialStateType => {
    return state
}

export default sidebarReducer;