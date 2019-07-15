import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as listActions from '../../store/modules/list';
import PostList from '../../compoenets/list/PostList';
import Pagination from '../../compoenets/list/Pagination';
import ListWrapper from '../../compoenets/list/ListWrapper';


class List extends Component {
    initialize = async () => {
        const {ListActions, page} = this.props;
        try{
            await ListActions.getList(page);
        }
        catch(e){
            console.log(e);
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.page !==this.props.page){
            this.initialize();
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        const {loading, list, page, tag, lastPage} = this.props;
        const toList = list.toJS();
        if(loading) return null;
        return(
            <>
            <ListWrapper>
                <PostList list={toList}/>
                <Pagination page={page} tag={tag} lastPage={lastPage}/>
            </ListWrapper>
            </>
        );
    }
}

export default connect(
    (state) => ({
        lastPage: state.list.get('lastPage'),
        list: state.list.get('list'),
        loading: state.pender.pending['list/GET_LIST']      // 로딩 상태
    }),
    (dispatch) => ({
        ListActions : bindActionCreators(listActions, dispatch)
    })
)(List);