import { toast } from 'react-toastify'
import { REQUEST_SUCCESS, REQUEST_START, REQUEST_FAILURE } from '../types/requestTypes'

const requestStart = (payload) => ({
    type: REQUEST_START,
    payload: {
        requestName: payload.name,
        inProgress: true,
    },
})

const requestSuccess = (payload) => ({
    type: REQUEST_SUCCESS,
    payload: {
        requestName: payload.name,
        inProgress: false,
    },
})

const requestFailure = (payload) => ({
    type: REQUEST_FAILURE,
    payload: {
        requestName: payload.name,
        inProgress: false,
        error: payload.error,
    },
})

export const requestHelper = async (dispatch, requestName, request) => {
    dispatch(requestStart({ name: requestName }))
    try {
        await request()
        dispatch(requestSuccess({ name: requestName }))
    } catch (error) {
        if (error.response?.data?.message !== undefined) {
            dispatch(
                requestFailure({
                    name: requestName,
                    error: error?.response,
                })
            )

            if (error?.response?.status !== 401) toast.error(error?.response?.data?.message)
        } else {
            dispatch(requestFailure({ name: requestName, error }))
            if (error?.message.trim() === '') return
            if (error?.response?.status !== 401) toast.error(error.message)
        }
    }
}
