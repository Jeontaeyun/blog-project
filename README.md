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