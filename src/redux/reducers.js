import ActionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

const intialState = fromJS({
    goods: [
        {
            name: 'tomatoes',
            price: 5
        },
        {
            name: 'potatoes',
            price: 3
        },
        {
            name: 'brinjal',
            price: 2
        },
        {
            name: 'cucumbers',
            price: 4
        },
        {
            name: 'salad',
            price: 1
        }
    ],
    sorted: false,
    count: 0
});

const listReducer = (state = intialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_SORTED:
            return state.set('sorted', action.sorted);

        case ActionTypes.COUNT:
            return state.set('count', state.get('count') + 1);

        default:
            return intialState;
    }
}

const getList = state => state.getIn(['goods']);
const getSorted = state => state.getIn(['sorted'])

// redux selector using createSelect
export const getGoods = createSelector(getList, getSorted, (list, sorted) => {
    return sorted ? list.sort((a, b) => {
        const aPrice = a.get('price');
        const bPrice = b.get('price');

        if (aPrice > bPrice) return 1;
        if (aPrice < bPrice) return -1;
        if (aPrice === bPrice) return 0;
    }) : list;
});

// native redux selector
/*export const getGoods = state => {
    console.log('normal redux select called, state => ', state);
    // const newState = state.setIn(['comments'], fromJS(action.comments));

    const list = state.getIn(['goods']);
    const sorted = state.getIn(['sorted']);

    return sorted ? list.sort((a, b) => {
        const aPrice = a.get('price');
        const bPrice = b.get('price');

        if (aPrice > bPrice) return 1;
        if (aPrice < bPrice) return -1;
        if (aPrice === bPrice) return 0;
    }) : list; 
}*/

const rootReducer = combineReducers({
    list: listReducer
});

export default rootReducer;