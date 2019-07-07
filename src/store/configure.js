/* 
configure.js는 스토어를 생성하는 함수이다.
함수를 따로 만드는 이유는 스토어를 클라이언트에서 생성하지만, 추후 서버 사이드 렌더링을 할 때 서버에서도 호출해야 하기 때문이다.
*/

import { createStore , applyMiddleware , compose , combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';
/*modules에 있는 리듀서 모듈들을 합해주는 리덕스 내장 함수*/
const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

/*prelaodedState는 서버 사이드 렌더링을 할때 전달 받을 초기 값이다.*/
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;
