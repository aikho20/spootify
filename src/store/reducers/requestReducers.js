import { REQUEST_FAILURE, REQUEST_START, REQUEST_SUCCESS } from '../types/requestTypes'
const initialState = {
    requestIds: [],
}

const requestReducers = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START: {
            const existingCall = state.requestIds.find(
                (request) => request.requestName === action.payload.requestName
            )

            if (existingCall) {
                return {
                    ...state,
                    requestIds: state.requestIds.map((request) =>
                        request.requestName === action.payload.requestName
                            ? {
                                  ...request,
                                  inProgress: true,
                                  error: null,
                              }
                            : request
                    ),
                }
            }

            return {
                ...state,
                requestIds: [...state.requestIds, action.payload],
            }
        }
        case REQUEST_SUCCESS: {
            return {
                ...state,
                requestIds: state.requestIds.filter(
                    (request) => request.requestName !== action.payload.requestName
                ),
            }
        }
        case REQUEST_FAILURE: {
            return {
                ...state,
                requestIds: state.requestIds.map((request) =>
                    request.requestName === action.payload.requestName
                        ? {
                              ...request,
                              error: action.payload.error,
                              inProgress: false,
                          }
                        : request
                ),
            }
        }

        default: {
            return state
        }
    }
}

export default requestReducers
