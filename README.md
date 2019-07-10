# 리액트 블로그 프로젝트 - 프론트

## 01. 프로젝트 개요

### (01) 프로젝트 스택

- **Language** : HTML5, CSS3, Javascript

- **Framework** : React.js

- **State Management** : Redux

- **Server-Side-Rndering** : React-helmet

### (02) 프론트 엔드 폴더 구조

01. **components** : 리덕스 상태에 연결되지 않는 덤프 컴포넌트를 보관하는 디렉토리

02. **containers** : 리덕스 상태와 연결되는 스마트 컴포넌트를 보관하는 디렉토리

03. **pages** : React-router-dom을 이용해서 라우팅을 구현할 때 각 페이지에 관한 구현을 보관하는 디렉토리

04. **lib** : 백엔드 API 함수들과 코드 스플리팅할 때 사용하는 asyncRoute 보관하는 디렉토리

05. **store** : Ducks 구조를 적용시킨 리덕스 모듈들과 스토어 생성 함수 보관하는 디렉토리

    - modules : 리듀스읭 각 모듈들을 정의하고 index.js로 보관하는 디렉토리

06. **styles** : 폰트, 색상, 반응형 디자인 도구, 그림자 생성 함수 등 프로젝트에서 전역적으로 필요한 스타일 관련 코드 보관하는 디렉토리


## 02. 프로젝트 이론

### (01) 프로젝트 진행 방식

01. 프로젝트 기본 구조 잡기
    
    - 프로젝트 생성하기

    - 프로젝트 Redux 모듈 설계 및 연결

    - 프로젝트 Routing 설계 및 구현

02. 기본 유저 인터페이스 생성

    - 컴포넌트 요소 분석 및 디자인

    - 컴포넌트 실제 구현

03. API와 연동하기

    - API와 연동하여 데이터 불러오기

    - 리듀스별 데이터 바인딩 구현

04. 최적화 작업 Optimization

    - 코드 스플리팅

    - Server-Side-Rendering

    - 404 페이지 만들기 등

### (02) 스타일링 유틸리티

01. open-color

    - yarn add open-color 을 통해 설치 가능

    - 적용할 색상을 쉽게 선택할 수 있는 SASS 색상 라이브러리

02. include-media

    - yarn add include-media 를 통해 설치 가능

    - 반응형 디자인을 쉽게 적용할 수 있다.

### (03) classNames 라이브러리

- yarn add classnames 로 설치 가능

- 여러 개의 클래스를 적용할 수 있도록 해주는 자바스크립트 라이브러리

```javascripts
import classNames from 'classnames/bind';
import styles from 'sass file';

const cx = classNames.bind(styles);
...

<div className={cx('box','blue')}></div>
```

- 위와 같이 SASS파일이 적용되는 class 이름을 여러 개 만들 수 있도록 해준다.

### (04) 마크다운 에디터 구현하기

- 마크다운(Markdown)이란 일반 텍스트 기반의 마크업언어로 README.md 파일이나 온라인 문서, 혹은 텍스트 편집기로 문서 양식을 편집할 때 쉽게 쓰고 읽을 수 있으며 HTML로 변환이 되는 언어이다.

- 마크다운을 편집하는 마크다운 에디터를 구현하기 위해서 다음 세 가지 라이브러리를 설치해야 한다.

- ``` yarn add codemirror marked prismjs ```

라이브러리    | 설명
---------- | --------------------------------------------------------------------------------------------------------------------------------------------
CodeMirror | 코드 에디터 라이브러리입니다. 코드에 색상을 입혀주는 역할을 하며 마크 다운을 작성할 때 각 문법에 따라 다른 색상을 입혀주고, 마크다운 내부에 입력하는 코드에도 문법에 따라 색을 입혀줍니다.
marked     | 에디터에서 작성한 마크다운을 HTML로 변환해주는 라이브러리
Prismjs    | 코드 블록을 아름답게 꾸며주는 라이브러리

### (05) 리덕스 사용하기 | Redux

개념    | 설명
---    | ---------------------------------------
스토어 Store| 애플리케이션의 상태 값들을 내장하는 저장 공간
액션 Action| 상태를 변화시킬 때 참조하는 객체, 어떤 종류의 액션이 있는지를 정의
디스패치 Dispatch | 액션을 스토에어 전달하는 것을 의미, 즉 액션을 실행시키는 함수
리듀서 Reducer  | 각 액션에 따른 상태 변화 로직을 정희하고 있는 함수
구독 Subscription    | 스토어 값이 필요한 컴포넌트는 스토어를 구독한다고 한다.

- 리덕스는 리액트에서 사용하려고 만든 상태 관리 라이브러리이다. 하지만 리액트에 의존하지 않아 별도로 리액트와 연결해주는 react-redux 라이브러리를 이용해야 한다.

#### 01) 리듀서 | Reducer

- 리듀서는 변화를 일으키는 함수입니다. 리듀서는 현재 상태인 state와 Action 두 개의 파라미터를 받습니다.

- 함수 내부에서 switch 문을 사용하여 action.type에 따라 새로운 상태를 만들어서 반환합니다.

#### 02) components와 containers 폴더

- 리덕스를 사용할 때 **components 폴더**에는 상태에 대한 부분을 제외한 컴포넌트에 대한 구현만을 한다.

- 반면, **containers 폴더** 안에는 컴포넌트를 불러와 리덕스와 연결해 상태에 대한 구현을 해주는 컴포넌트를 보관한다.

#### 03) Redux-actions 라이브러리

메소드         | 설명
-------------| ----------
createAction | - Redux의 액션을 쉽게 생성해주는 함수<br>- ``` export const decrement = createAction('typeName') ```
handleActions | - 기존의 switch 문으로 구현된 리듀서를 쉽게 구현하는 함수

[구현 예시]

```javascript

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

//redux-actions라이브러리를 이용하여 Reducer를 switch구문 없이 구현
export default handleActions({
    /*액션 타입에 접두사가 있을 경우 INITIALIZE가 아니라 [INITIALIZE]와 같이 구현해야 한다.*/
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const {name , value} = action.payload;
        return state.set(name, value);
    }
}, initialState);

```