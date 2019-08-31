import ActionTypes from './actionTypes';

export const setSorted = sortState => {
    return {
        type: ActionTypes.SET_SORTED,
        sorted: sortState
    }
}

export const setCount = () => {
    return {
        type: ActionTypes.COUNT
    }
}