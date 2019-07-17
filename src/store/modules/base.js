/*
모달의 가시성을 관리하며, 추후 로그인 기능을 구현할때 로그인 모달 상태와 로그인 상태도 관리합니다.
로그인 상태, 삭제 및 로그인할 때 보이는 모달 상태를 다룹니다.
 */

 import { createAction, handleActions } from 'redux-actions';

 import { Map } from 'immutable';
 import { pender } from 'redux-pender';

 //action types
 const INITIALIZE = 'base/INITIALIZE';
 const SHOW_MODAL = 'base/SHOW_MODAL';
 const HIDE_MODAL = 'base/HIDE_MODAL';
 //action creators
 export const showModal = createAction(SHOW_MODAL);
 export const hideModal = createAction(HIDE_MODAL);
 export const initialize = createAction(INITIALIZE);
 //initial state
 const initialState = Map({
     modal: Map({
         remove: false,
         login: false
     })
 });


 //reducer
 export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [SHOW_MODAL] : (state, action) => {
        // payload의 값을 modalName으로 저장해라
        const {payload : modalName} = action;
        return state.setIn(['modal', modalName],true);
        // Map에서 깊숙한 곳에 있는 값에 접근하기 위해서는 setIn 메소드를 이용한다.
    },
    [HIDE_MODAL] : (state, action) => {
        const {payload : modalName} = action;
        return state.setIn(['modal', modalName],false);
    }
 }, initialState);