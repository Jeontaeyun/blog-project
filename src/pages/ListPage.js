import React from 'react';
import PageTemplate from '../compoenets/common/PageTemplate';
import ListWrapper from '../compoenets/list/ListWrapper';
import PostList from '../compoenets/list/PostList';
import Pagination from '../compoenets/list/Pagination';

const ListPage = () => {
    return(
        <div>
            <PageTemplate>
                <ListWrapper>
                    <PostList/>
                    <Pagination/>
                </ListWrapper>
            </PageTemplate>
        </div>
    );
};

export default ListPage;