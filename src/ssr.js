import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {Provider} from 'react-redux';
import configure from 'store/configure';

import App from './compoenets/App';

const render = (ctx) => {
    const {url} = ctx;          //요청에서 URL을 받아옵니다.

    // 요청이 들어올 때 마다 새 스토어를 생성합니다.
    const store =configure();
    // ReactDOMSAerver는 서버용 렌더링 함수입니다. 해당 함수는 컴포넌트를 렌더링하여 문자열로 만들어 줍니다.
    // renderToString은 렌더링된 결과물을 문자열로 만들어 줍니다.
    // 서버에서는 BrowserRouter 대신에 StaticRouter를 사용합니다.
    const html = ReactDOMServer.renderToString(
        <Provider sotre={store}>
            {/*
            BrowserRouter는 웹 브라우저가 아닌 HTML5 History API를 사용하여 그에 따라 렌더링하는 반면
            StaticRoruter는 주소 값을 직접 url이라는 props로 넣어주고 이에 따라 렌더링을 합니다.
            */}
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    return html;
}

export default render;