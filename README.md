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

- createAction 함수는 액션 생성 함수를 간단하게 만들어주며 파라미터를 넣어 호출하면 **payload**라는 키에 받은 값을 넣어 객체로 만들어줍니다.

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
    /*
    액션 타입에 접두사가 있을 경우 INITIALIZE가 아니라 [INITIALIZE]와 같이 구현해야 한다.
    action.payload를 통해서
    */
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const {name , value} = action.payload;
        return state.set(name, value);
    }
}, initialState);

```

#### 04) Ducks 파일 구조

- 리덕스에서 사용하는 파일들은 일반적으로 액션 타입, 액션 생성 함수, 리듀서 이렇게 세 종류로 분리하여 관리합니다. 하지만 이러한 번거로움을 '액션타입, 액션 생성 함수, 리듀서'를 모두 한 파일에 모듈화하여 관리하면서 효율적으로 관리하는 파일 구조가 Ducks 구조입니다.

#### 05) react-pender 라이브러리

- PENDING, SUCCESS, FAILURE에 대한 액션 타입을 정의해야 하고, 리듀서에서도 이 액션들에 따라 요청 상태를 바꿔주는 작업을 할 시 이 작업을 자동화하기 위해 redux-pender 라이브러리를 사용한다.

[하나의 비동기 작업 관리 코드]

```javascript

import {pender} from 'redux-pender';
...
export default reducer({
    ...pender({
        type: NAME,
        // onPending: (state, action) => state,
        // onFailure: (state, action) => state
        // 위의 코드를 통해서 요청 중일 때와 실패했을 때 추가로 해야할 작업을 정의할 수 있다.
        onSuccess: (state,action) => {
            const {title, body} = action.payload.data;
            return (
                data: {
                    title,
                    body
                }
            )
        }
    })
})

```

[다수의 비동기 작업 관리 코드]

```javascript

import {pender, applyPenders} from 'redux-pender';
...
export default applyPender(reducer,[
    {
        type: NAME,
        // onPending: (state, action) => state      요청중
        // onFailure: (state, action) => state      요청실패
        // onSuccess: (state, action) => state      요청완료
        // 위의 코드를 통해서 요청 중일 때와 실패했을 때 추가로 해야할 작업을 정의할 수 있다.
        onSuccess: (state,action) => {
            const {title, body} = action.payload.daya;
            return ({
                data: {
                    title,
                    body
                    }
            );
            }
        }
    },
    {type: OTHER , onSuccess: (state,action) => ...},
    {type: OTHER , onSuccess: (state,action) => ...}
]); 

```

### (05) 그 외

#### 01) React-router-dom의 withRouter

- 라우트가 아닌 컴포넌트에서 라우터에서 사용하는 객체인 location, history, match를 사용하려면 withRouter라는 HoC를 사용해야 한다.

[구현 예시]

```javascript

import React from 'react';
import {withRouter} from 'react-router-dom';

const ShowPageInfo = withRouter(({match, location}) => {
    return <div>현재 위치 : {location.pathname}</div>
});

export default ShowPageInfo

```

#### 02) moment 라이브러리

- 날짜를 다양한 형식의 텍스트로 변환해주는 라이브러리

- ``` yarn add moment ``` 를 통해서 설치할 수 있다.

[구현 예시]


```javascript

import moment from 'moment';

...

moment($date);

```

#### 03) STORY BOOK

- React 프론트엔드 개발을 할 때 컴포넌트 기반의 View를 위한 UI 개발 툴.

- 이를 통해 컴포넌트 단위의 View를 볼 수 있어 컴포넌트를 개발하는데 큰 도움을 준다.

- Story book은 Container가 아닌 **Presenter 컴포넌트에 집중을 해서 이를 설계해주고 보여주는 기능에 초점을 둔 툴**이다.

    - ``` cd my-project-directory ```
    
    - ``` yarn add global @storybook/cli ```

    - ``` getstorybook ```

    - ``` yarn storybook ```

- 스토리북은 앱 밖에서 따로 동작하는 어플리케이션이다.


#### 04) 코드 스플리팅 | Code Splitting

- webpack에서 프로젝트를 번들링할 때 팡리 하나가 아니라 파일 여러 개로 분리시켜서 결과물을 만들 수 있습니다. 이를 통해 페이지를 로딩할 때 한꺼번에 불러오는 것이 아니라 필요한 시점에 불러올 수 있습니다.

- SPA의 단점은 페이지 로딩 속도가 지연될 수 있다는 것입니다. 로딩 속도가 지연되는 이유는 자바스크리비트 번들 파일에 모든 애플리케이션의 로직을 불러오므로 규모가 커지면서 용량도 커지기 때문입니다. 이 문제를 코드 스플리팅(Code Splitting)으로 해결할 수 있습니다.

[코드 스플리팅을 위해 생성하는 함수]

```javascript

/* 컴포넌트를 비동기적으로 불러올 수 있게 하는 함수*/

import React from 'react';

export default function asyncComponent(getComponent) {
    class AsyncComponent extends React.Component {
        static Component = null;

        state = {Component: AsyncComponent.Component};

        constructor(props){
            super(props);
            if(AsyncComponent.Component) return;
            getComponent().then(({default : Component}) => {
                AsyncComponent.Component = Component;
                this.setState({Component});
            })
        }
        render(){
            const {Component} = this.state;
            if(Component){
                return <Component {...this.props}/>
            }
            return null;
        }
    }
    /*
    Dynamic Import라는 웹팩 내장 기능을 사용해서 코드 스플리팅을 진행한다. 
    서버사이드 렌더링과 코드 스플리팅을 함께 구현할 때 발생할 수 있는 깜빡임 현상을 해결하는 데 사용합니다.
    */
    AsyncComponent.getComponent = () => {
        return getComponent().then(({default : Component}) => {
            AsyncComponent.Component = Component;
        });
    }
    return AsyncComponent;
}

```

[코드 스플리팅을 위한 웹팩 설정]

```javascript

entry: {
      app: paths.appIndexJs,
      vendor: [
        require.resolve('./polyfillls'),
        'react',
        'react-dom',
        'react-router-dom',
        'redux',
        'axios',
        'codemirror',
        'prismjs'
      ]
    }

(...)



```

#### 05) 서버사이드 렌더링 | Server-Side-Rendering(SSR)

- 웹 브라우저에서 리액트를 불러와 컴포넌트를 렌더링 하는 것이 아니라, 서버에서 비리 렌더링하여 HTML을 생성한 후 웹 브라우저에 전달하는 렌더링 방식.

- 서버사이드 렌더링은 다음과 같은 두 가지 이유로 크게 사용됩니다.

서버사이드 렌더링 | 설명
------------ | ----
장점 | 01. 검색 엔진 최적화(SEO) <br/>02. 유저 경험 개선 <br/> 
단점 | 01. 서버의 자원이 많이 소모되어 서버 성능에 무리가 갈 수 있습니다. <br/> 02. 서버사이드렌더링은 검색 엔진 최적화와 초기 사용자 경험에만 중요하다.

- CRA를 이용해 SSR을 구현할 경우 렌더링을 위한 서버를 만든 후 React Application을 넣어 SSR을 구현할 수 있다.

- 이 부분은 NEXT.js 보다 복잡하지만 동작 원리와 아키텍쳐를 이해할 필요는 있다.

#### 06) React-helmet을 이용한 HEAD 태그 작성

- ``` yarn add react-helmet ```을 통해서 Head태그의 meta 태그를 JSX로 직접 태그를 작성하듯 쉽게 바꿀 수 있다.

```javascript

import React from 'react';
import {Helmet} from 'react-helmet';
(...)

return(
    <>
    (...)
        <Helmet>
            <meta charSet='utf-8'/>
            <title>My title</title>
            <link rel='canonical' href='http://mysite.com/example'/>
        </Helmet>
    </>
)

```

- 이를 사용하면 위와같이 일반 HTML처럼 XML 형태로 작성할 수 있습니다. 한 까지 주의할 점은 JSX이기 때문에 **꼭 태그를 닫아 주어야 한다는 것입니다.**

## 03. 프로젝트 고찰

### (01) 리액트에 대한 전반적인 이해

### (02) 코드 스플리팅과 SSR의 필요성

> 프로젝트의 빌딩 파일이 1MB를 넘어 페이지 로딩 속도가 느려지면 코드 스플리팅을 진행하고, 서비스가 콘텐츠 기반이며, SEO(검색엔진최적화)와 초기 로딩 속도를 개선해야할 때는 서버사이드 렌더링(SSR)을 도입하는 것을 추천한다.

해당 프로젝트를 통해서 코드 스플리팅과 서버사이드 렌더링이 필요할 때에 대해 알게되고, 이를 구현하는 방법에 대해 알게 되었다.
지난 <SNS 프로젝트>에서 사용한 **NEXT.js에서는 자동으로 코드 스플리팅을 해주고, getinitialprops 라이프 사이클을 통해서 쉽게 서버 사이드 렌더링을 할 수 있다.** 리액트를 통해서 하는 법과 넥스트를 통해서 하는 법 모두 정리해두고 앞으로 진행할 프로젝트에서 요구에 맞게 사용하도록 하자.

### (03) Webpack 과 Build

> 프로젝트의 기능적인 면을 완성해도 앱은 webpack 개발 서버에서 제공하기 때문에 다른 사람들에게 웹 애플리케이션을 보여주기 위해서는 **빌드 작업을 거치고 서버에서 정적 파일로 제공하도록 설정해야 합니다.**

