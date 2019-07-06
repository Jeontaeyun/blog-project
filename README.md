# 리액트 Blog Project

## 01. 프로젝트 개요

### (01) 프로젝트 스택

#### 01) 백 엔드

- Language : Node.js

- Framework : 

- Database : Mongoose

#### 02) 프론트 엔드


## 02. 프로젝트 이론

### (01) 백 엔드 서버

### (02) Mongo DB | 몽고디비

#### 01) Mongo DB 란?

- 관계형 데이터 베이스(RDBMS)인 MySQL, Oracle DB, PostgreSQL 등은 데이터 스키마가 고정적이라는 것과 확장성이 낮다는 한계가 있습니다.

    - 새로 등록하는 데이터의ㅣ 형식이 기존에 있던 데이터와 다르면 기존 데이터를 모두 수정해야 합니다.

    - RDBMS는 저장하고 처리해야 할 데이터양이 늘어나면 해당 데이터 베이ㅣ스 서버의 성능을 업그레이드 하는 방식으로 확장해주어야 합니다.

- MongoDB는 이런 한계를 극복한 문서 지향적 NoSQL 데이터베이스입니다. MongoDB에 저장하는 데이터들은 유동적인 스키마를 지닐 수 있습니다.

- 서버의 데이터 양이 늘어나도 한 컴퓨터에서만 처리하는 것이 아니라 여러 컴퓨터로 분산하여 처리할 수 있도록 확장하기 쉽게 설계되어 있습니다.

#### 02) Document 문서란?

- RDBMS의 레코드(Record)와 비슷한 개념. 문서의 데이터 구조는 한 개 이상의 key-value 쌍으로 되어 있습니다.

- MongoDB의 문서 예시

```javascript
{
    "_id": "jow1813",
    "name": "Stark",
    "pass": "wfewjqfqhgoiqhweofijwefijwo"
}
```

- 문서는 BSON(바이너리 형태의 JSON) 형태로 저장합니다. 그렇기 때문에 나중에 JSON 형태의 객체를 데이터베이스에 저장할 때, 큰 공수를 들이지 않고도 데이터를 데이터베이스에 등록할 수 있어 편리합니다. 

- MongoDB는 다른 스키마를 가지고 있는 문서들이 한 컬렉션에서 공존할 수 있습니다. MongoDB 안의 데이터가 같은 스키마를 가지고 있을 필요가 없으므로 그냥 넣어 주면 됩니다.

#### 03) MongoDB 설치

- ``` brew update ```

- ``` brew install mongodb ```

- ``` brew services start mongodb ```

- 이후 터미널에 **mongo** 키워드를 입력하면 MongoDB가 제대로 동작하는지 확인할 수 있다.

### (03) Mongoose | 몽구스

#### 01) Mongoose 란?

- mongoose는 Node.js 환경에서 사용하는 **MongoDB 기반 ODM(Object Data Modeling) 라이브러리 입니다.**

- 이 라이브러리를 통해 데이터베이스 문서들을 자바스크립트 객체처럼 사용할 수 있습니다.

- ``` yarn add mongoose dotenv ``` 릍 통해 설치

- **dotenv**는 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발도구입니다. 몽구스를 연결할 때 이용하는 서버 계정과 비밀번호등을 보관하는 역활을 합니다.
