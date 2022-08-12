export type PostType = {
    id: number
    name: string
    like: number
}

export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        twitter: string
        facebook: string
        instagram: string
        youtube: string
        mainLink: string
        website: string
    }
    photos: PhotosType
}
export type UserType = {
    id: number
    status: string
    name: string
    photos: PhotosType
}