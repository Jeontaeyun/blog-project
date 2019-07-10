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

