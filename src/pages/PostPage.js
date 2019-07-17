import React from 'react';
import PageTemplate from '../compoenets/common/PageTemplate';
import Post from '../containers/post/Post';
import AskRemoveModalContainer from '../containers/modal/AskRemoveModalContainer';

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

export default PostPage;