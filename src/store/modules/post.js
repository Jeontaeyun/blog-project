/*
단일 포스트 상태를 다룹니다.
 */

import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../lib/api';
//action types
const GET_POST = 'post/GET_POST';
const DELETE_POST = 'post/DELETE_POST';
//action creators
export const getPost = createAction(GET_POST, api.getPost);
export const deletePost = createAction(DELETE_POST, api.deletePost);
//initial state
const initialState = Map({
    post : Map({})
});

//reducer
export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {data : post} = action.payload;
            console.log(action.payload);
            return state.set('post', fromJS(post));
        }
    })
}, initialState);