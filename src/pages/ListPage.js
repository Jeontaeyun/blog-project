import React from 'react';
import PageTemplate from '../compoenets/common/PageTemplate';
import List from '../containers/post/list';

const ListPage = ({match}) => {
    //page의 기본 값을 1로 설정합니다.
    const {page=1,tag} = match.params;
    return(
        <div>
            <PageTemplate>
               <List
                    page={parseInt(page,10)}
                    tag={tag}
               />
            </PageTemplate>
        </div>
    );
};

export default ListPage;