import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

import './styles/base.scss';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// registerServiceWorkier();
// serviceWorker.unregister();
/* 
CRA로 만든 프로젝트에는 Service Worker 기능이 기본적으로 등록되어 있습니다.
이 기능은 유저가 페이지를 처음 불러오면 페이지에서 사용하는 파일들을 로컬 캐시에 등록하여,
다음부터는 페이지에 접속할 때 서버에 아예 요청하지 않고 로컬에서 꺼내 사용할 수 있게합니다.

서버 사이드 렌더링을 하고 제대로 동작하는지 테스트할 때 이 기능이 방해가 되므로(시도할때마다 캐시를 날려주어야한다.) 이 기능을 비활성화합니다.
*/
