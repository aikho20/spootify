import { RequestsEnum } from '../enum'
import { GET_SONG_NEW_RELEASE, GET_SONG_FEATURED, GET_SONG_CATEGORIES } from '../types/songsType'
import { requestHelper } from './requestActions'



export const getSongCategories = (payload) => async (dispatch) => {
    await requestHelper(dispatch, RequestsEnum.getSongCategories, async () => {
        dispatch({
            type: GET_SONG_CATEGORIES,
            payload: {},
        })
    })
}
export const getSongFeatured = (payload) => async (dispatch) => {
    await requestHelper(dispatch, RequestsEnum.getSongFeatured, async () => {
        dispatch({
            type: GET_SONG_FEATURED,
            payload: {},
        })
    })
}
export const getSongNewRelease = (payload) => async (dispatch) => {
    await requestHelper(dispatch, RequestsEnum.getSongNewRelease, async () => {
        dispatch({
            type: GET_SONG_NEW_RELEASE,
            payload: {},
        })
    })
}
