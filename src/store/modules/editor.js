/*
마크다운 에디터 상태를 다룹니다.
 */

import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

//Action의 Type에 대한 명명을 정의하는 부분
const INITIALIZE = 'editor/INITIALIZE' ;
const CHANGE_INPUT = 'editor/CHANGE_INPUT' ;

//redux-actions 라이브러리를 활용한 Action을 생성을 구현
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

//Initial State를 구현하는 부분
const initialState = Map({
    title: '',
    markdown: '',
    tags: ''
});

//redux-actions라이브러리를 이용하여 Reducer를 switch구문 없이 
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const {name , value} = action.payload;
        return state.set(name, value);
    }
}, initialState);