import React from 'react';
import PageTemplate from '../compoenets/common/PageTemplate';
import List from '../containers/post/list';
import {Helmet} from'react-helmet';
import {bindActionCreators} from 'redux';
import * as listActions from '../store/modules/list';

const ListPage = ({match}) => {
    //page의 기본 값을 1로 설정합니다.
    const {page=1,tag} = match.params;
    const title = '리스트';
    return(
        <div>
            <PageTemplate>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <List
                        page={parseInt(page,10)}
                        tag={tag}
                />
            </PageTemplate>
        </div>
    );
};

List.preload = (dispatch, params) => {
    const {page = 1} = params;
    const ListActions = bindActionCreators(listActions, dispatch);
    console.log(ListActions.getList(page));
    return ListActions.getList(page);
}

export default ListPage;