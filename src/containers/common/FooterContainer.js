import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../store/modules/base';
import Footer from '../../compoenets/common/Footer';
class FooterContainer extends Component{
    
    handleLoginClick = async () => {
        const {BaseActions, logged}= this.props;
        if(logged){
            try {
                await BaseActions.logout();
                window.location.reload();       //페이지 새로고침
            }
            catch(e){
                console.log(e);
            }
        }
        else{
            BaseActions.initializeLoginModal();
            return BaseActions.showModal('login');
        }
    };

    render(){
        const {handleLoginClick} = this;
        const {logged} = this.props;
        return(
           <Footer onLoginClick = {handleLoginClick} logged={logged}/>
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
)(withRouter(FooterContainer));