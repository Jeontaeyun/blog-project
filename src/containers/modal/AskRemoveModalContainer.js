import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../store/modules/base';
import * as postActions from '../../store/modules/post';
import AskRemoveModal from '../../compoenets/modal/AskRemoveModal';
import {withRouter} from 'react-router-dom';

class AskRemoveModalContainer extends Component {
    handleCancel = () => {
        //connect로 묶인 액션과 dispatch는 props로 보내져서 호출이 가능하다.
        const {BaseActions} = this.props;
        BaseActions.hideModal('remove');
    };

    handleConfirm = async () => {
        const {PostActions, BaseActions, history, match} = this.props;
        const {id} = match.params;
        try{
            await PostActions.deletePost(id);
            BaseActions.hideModal('remove');
            history.push('/');
        }
        catch(e){
            console.log(e);
        }
    };

    render() {
        const {visible} = this.props;
        const {handleCancel ,handleConfirm} = this;
        return (
            <>
            <AskRemoveModal visible ={visible} onCancel={handleCancel} onConfirm={handleConfirm}/>
            </>
        );
    };


}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal', 'remove'])
    }),
    (dispatch) => ({
        BaseActions : bindActionCreators(baseActions, dispatch),
        PostActions : bindActionCreators(postActions, dispatch)
    })
)(withRouter(AskRemoveModalContainer));