/*
포스트 목록 상태를 다룹니다.
 */

import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

//action types
const GET_LIST = 'list/GET_LIST';
//action creators
export const getList = createAction(GET_LIST, api.getList);
//initial state
const initialState = Map({
    list: Map({}),
    lastPage: null
});


//reducer
export default handleActions({
    ...pender({
        type: GET_LIST,
        onSuccess: (state,action) => {
            const {data: posts} = action.payload;
            const lastPage = action.payload.headers['last-page'];
            return state.set('list', fromJS(posts)).set('lastPage',parseInt(lastPage,10));
        }
    })
}, initialState);