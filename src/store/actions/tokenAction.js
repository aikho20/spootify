import axios from 'axios'
import { GET_ACCESS_TOKEN } from '../types/tokenTypes'
import { requestHelper } from './requestActions'
import { RequestsEnum } from '../enum'

export const getAccessToken = (payload) => async (dispatch) => {
    await requestHelper(dispatch, RequestsEnum.getAccessToken, async () => {
        const authParams = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            data:
                'grant_type=client_credentials&client_id=' +
                process.env.REACT_APP_SPOTIFY_CLIENT_ID +
                '&client_secret=' +
                process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
        }
        const token = await axios.post('https://accounts.spotify.com/api/token', authParams)
        dispatch({
            type: GET_ACCESS_TOKEN,
            payload: { token: token },
        })
    })
}
