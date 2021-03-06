import React, {Component} from 'react';
import Header from '../../compoenets/common/Header';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../store/modules/base';
class HeaderContainer extends Component{
    
    handleRemove = () => {
        const {BaseActions} = this.props;
        BaseActions.showModal('remove');
    }

    render(){
        const {handleRemove} = this;
        const{ match , logged } = this.props;
        const {id} = match.params;
        
        return(
           <Header postId={id} onRemove={handleRemove} logged={logged}/>
        );
    }
}

/*리덕스와 리액트를 연결하는 해당 코드에 대해서는 꾸준히 공부해야 할 것 같다.*/
export default connect(
    (state) => ({
        logged : state.base.get('logged')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions,dispatch)
    })
)(withRouter(HeaderContainer));