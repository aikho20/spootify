import axios from 'axios'
import { GET_ACCESS_TOKEN } from '../types/tokenTypes'
import { requestHelper } from './requestActions'
import { RequestsEnum } from '../enum'

export const getAccessToken = (payload) => async (dispatch) => {
    await requestHelper(dispatch, RequestsEnum.getAccessToken, async () => {
        dispatch({
            type: GET_ACCESS_TOKEN,
            payload: { token: 'testing' },
        })
    })
}
