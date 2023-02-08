import axios from 'axios'
import { GET_ACCESS_TOKEN } from '../types/tokenTypes'
import { requestHelper } from './requestActions'
import { RequestsEnum } from '../enum'

export const getAccessToken = (payload) => async (dispatch) => {
    await requestHelper(dispatch, RequestsEnum.getAccessToken, async () => {
        const authParams = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data:
                'grant_type=client_credentials&client_id=' +
                '3c04bbd075a644b6b0208bd9ec18e7ae' +
                '&client_secret=' +
                'f7d2e884f3ce42a7a45944f84a560a4f',
        }
        const token = await axios.post('https://accounts.spotify.com/api/token', authParams)
        alert(token)
        dispatch({
            type: GET_ACCESS_TOKEN,
            payload: { token: token },
        })
    })
}
