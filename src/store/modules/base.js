/*
모달의 가시성을 관리하며, 추후 로그인 기능을 구현할때 로그인 모달 상태와 로그인 상태도 관리합니다.
로그인 상태, 삭제 및 로그인할 때 보이는 모달 상태를 다룹니다.
 */

 import { createAction, handleActions } from 'redux-actions';

 import { Map } from 'immutable';
 import { pender } from 'redux-pender';
 import * as api from '../../lib/api';

 //action types
 const INITIALIZE = 'base/INITIALIZE';
 const SHOW_MODAL = 'base/SHOW_MODAL';
 const HIDE_MODAL = 'base/HIDE_MODAL';
 const CHECK_LOGIN = 'base/CHECK_LOGIN';
 const LOGIN = 'base/LOGIN';
 const LOGOUT = 'base/LOGOUT';
 const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
 const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';

 //action creators
 export const showModal = createAction(SHOW_MODAL);
 export const hideModal = createAction(HIDE_MODAL);
 export const initialize = createAction(INITIALIZE);
 
 export const login = createAction(LOGIN, api.login);
 export const logout = createAction(LOGOUT, api.logout);
 export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
 export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
 export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);

 const initialState = Map({
     modal: Map({
         remove: false,
         login: false
     }),
     loginModal : Map({
         password: '',
         error: false
     }),
     logged: false
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
    },
    ...pender({
        type: LOGIN,
        onSuccess: (state, action) => {
            return state.set('logged', true);
        },
        onError: (state, action) => {
            return state.setIn(['loginModal','error'],true).setIn(['loginModal','password'],'');
        }
    }),
    ...pender({
        type: LOGOUT,
        onSuccess: (state, action) => {
            return state.set('logged', false);
        }
    }),
    ...pender({
        type: CHECK_LOGIN,
        onSuccess: (state, action) => {
            const {logged} = action.payload.data;
            return state.set('logged', logged);
        }
    }),
    [CHANGE_PASSWORD_INPUT] : (state, action) => {
        const {payload:value} = action;
        return state.setIn(['loginModal', 'password'], value);
    },
    [INITIALIZE_LOGIN_MODAL] : (state, action) => {
        return state.set('loginModal', initialState.get('loginModal'));
    }
 }, initialState);