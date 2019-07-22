import React from 'react';
import NotFound from '../compoenets/common/NotFound';

const NotFoundPage = ({history, staticContext}) => {
    if(staticContext){
        staticContext.isNotFound = true;
        // staticContext는 서버 렌더링을 하는 StaticRouter를 사용할 때만 존재하는 객체
        // 웹 브라우저에서는 존재하지 않습니다.
        // 렌더링 한 후 서버에 특정 정보를 전달해야 할 때 사용합니다.
    }
    return(
        <div>
            <NotFound onGoBack={history.goBack}/>
        </div>
    );
};

export default NotFoundPage;