import { GET_SONG_NEW_RELEASE, GET_SONG_FEATURED, GET_SONG_CATEGORIES } from '../types/songsType'
const initialState = {
    newRelease: [],
    featured: [],
    categories: [],
}
const songsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SONG_NEW_RELEASE:
            return {
                ...state,
                newRelease: [...state.modules, ...payload.modules],
            }

        case GET_SONG_FEATURED:
            return {
                ...state,
                featured: [...state.modules, ...payload.modules],
            }
        case GET_SONG_CATEGORIES:
            return {
                ...state,
                categories: [...state.modules, ...payload.modules],
            }
        default:
            return { ...state }
    }
}

export default songsReducer
