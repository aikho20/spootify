import { GET_ACCESS_TOKEN } from '../types/tokenTypes'
const initialState = {
    token: '',
}
const tokenReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ACCESS_TOKEN:
            return {
                ...state,
                token: payload.token,
            }
        default:
            return { ...state }
    }
}

export default tokenReducers
