import React from 'react';
import PageTemplate from '../compoenets/common/PageTemplate';
import Post from '../containers/post/Post';
import AskRemoveModalContainer from '../containers/modal/AskRemoveModalContainer';

import *as postActions from '../store/modules/post';
import {bindActionCreators} from 'redux';

const PostPage = ({match}) => {
    const {id} = match.params;
    return(
        <div>
            <PageTemplate>
                <Post id = {id}/>
                <AskRemoveModalContainer/>
            </PageTemplate>
        </div>
    );
};

PostPage.preload = (dispatch, params) => {
    const {id} = params;
    const PostActions = bindActionCreators(postActions, dispatch);
    return PostActions.getPost(id);
    // API 종류가 여러개일 경우 return Promise.all([action1(), action2()])형식으로 작성하면 됩니다.
}

export default PostPage;