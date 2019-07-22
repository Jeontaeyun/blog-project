import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router';
import {Provider} from 'react-redux';
import configure from './store/configure';
import routes from './routes';
import axios from 'axios';

import App from './compoenets/App';
import {Helmet} from 'react-helmet';

const render = async (ctx) => {
    const {url, origin} = ctx;          //요청에서 URL을 받아옵니다.
    //render의 파라미터로 받는 ctx는 백엔드 Koa 서버에서 ctx가 들어가는 부분이다.
    // 요청의 Origin 값을 baseURL로 설정하는 설정
    axios.defaults.baseURL = origin;
    const context = {};
    // 요청이 들어올 때 마다 새 스토어를 생성합니다.
    const store = configure();

    const promises = [];
    // 라우트 설정에 반복문을 돌려서 일치하는 라우트를 찾습니다.
    routes.forEach(route =>{
        const match = matchPath(url, route);
        // 일치하지 않으면 무시합니다.
        if(!match) return;

        // match가 성공하면 해당 라우트가 가리키는 컴포넌트의 preload를 호출합니다.
        // 그리고 파싱된 params를 preload 함수에 전달합니다.
        const { component } = route;
        const { preload } = component;
        if(!preload) return;

        const {params} = match;
        // Route의 props로 받는 match와 동일한 객체입니다.
        // preload를 사용하여 얻은 프로미스를 promise 배열에 등록합니다.

        const promise = preload(store.dispatch, params);
        promises.push(promise);
    }
    );

    try{
        // 등록된 모든 프로미스를 기다립니다.
        // 이렇게하면 preload함수가 모두 끝난 후 렌더리이을 하므로, 데이터를 받아 온 상태로 렌더링 합니다.
        await Promise.all(promises);
    }
    catch(e){

    }


    // ReactDOMSAerver는 서버용 렌더링 함수입니다. 해당 함수는 컴포넌트를 렌더링하여 문자열로 만들어 줍니다.
    // renderToString은 렌더링된 결과물을 문자열로 만들어 줍니다.
    // 서버에서는 BrowserRouter 대신에 StaticRouter를 사용합니다.
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            {/*
            BrowserRouter는 웹 브라우저가 아닌 HTML5 History API를 사용하여 그에 따라 렌더링하는 반면
            StaticRoruter는 주소 값을 직접 url이라는 props로 넣어주고 이에 따라 렌더링을 합니다.
            */}
            <StaticRouter location={url} context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    if(context.isNotFound){
        ctx.status = 404;
        // HTTP 상태를 404로 반환
    }

    const helmet = Helmet.renderStatic();
    // helet으로부터 받은 데이터를 renderStatic을 이용해 바인딩
    // renderStatic은 한번 렌더링 작업을 완료한 후 실행해야 합니다.

    return {html, helmet};
}

export default render;