/*
마크다운 에디터 상태를 다룹니다.
 */

import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

//Action의 Type에 대한 명명을 정의하는 부분
const INITIALIZE = 'editor/INITIALIZE' ;
const CHANGE_INPUT = 'editor/CHANGE_INPUT' ;
const WRITE_POST = 'editor/WRITE_POST';

//redux-actions 라이브러리를 활용한 Action을 생성을 구현
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);

//Initial State를 구현하는 부분
const initialState = Map({
    postId: null,
    title: '',
    markdown: '',
    tags: ''
});

//redux-actions라이브러리를 이용하여 Reducer를 switch구문 없이 구현
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const {name , value} = action.payload;
        return state.set(name, value);
    },
    ...pender({
        tyep: WRITE_POST,
        onSuccess : (state, action) => {
            const {_id} = action.payload.data;
            return state.set('postId', _id);
        }
    })
}, initialState);