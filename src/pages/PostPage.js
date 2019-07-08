import React from 'react';
import PostInfo from '../compoenets/post/PostInfo';
import PostBody from '../compoenets/post/PostBody';
import PageTemplate from '../compoenets/common/PageTemplate';

const PostPage = () => {
    return(
        <div>
            <PageTemplate>
                <PostInfo/>
                <PostBody/>
            </PageTemplate>
        </div>
    );
};

export default PostPage;