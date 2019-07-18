import React from 'react';
import NotFound from '../compoenets/common/NotFound';

const NotFoundPage = ({history}) => {
    return(
        <div>
            <NotFound onGoBack={history.goBack}/>
        </div>
    );
};

export default NotFoundPage;