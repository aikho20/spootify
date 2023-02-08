//get request part of the state
const requestState = (state) => state

export const requestsInProgress = (state) =>
    requestState(state).requestIds.filter((request) => request.inProgress).length > 0

//get requests in progress either by single requestName or by requestNames array
export const getRequestsInProgress = (
    state,
    requestName // RequestsEnum | RequestsEnum[]
) => {
    const singleNamedRequestInProgress = (requestName) => {
        return (
            requestState(state).requestIds.find(
                (request) => request.requestName === requestName && request.inProgress
            ) !== undefined
        )
    }

    if (Array.isArray(requestName)) {
        return requestName.some(singleNamedRequestInProgress)
    }

    return singleNamedRequestInProgress(requestName)
}

export const getRequestError = (state, requestName) =>
    requestState(state).requestIds.find(
        (request) => request.requestName === requestName && request.error !== null
    )?.error
 