import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../store/modules/base';
import LoginModal from '../../compoenets/modal/LoginModal';

class LoginModalContainer extends Component {
    handleLogin = async () => {
        const {BaseActions, password} = this.props;
        try{
            await BaseActions.login(password);
            BaseActions.hideModal('login');
        }
        catch(e){
            console.log(e);
        }
    };

    handleCancel = () => {
        const {BaseActions} = this.props;
        BaseActions.hideModal('login');
    }

    handleChange = (e) => {
        const {value} = e.target;
        const {BaseActions} = this.props;
        BaseActions.changePasswordInput(value);
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleLogin();
        }
    }

    render(){
        const { handleCancel, handleChange, handleKeyPress, handleLogin} = this;
        const { visible, error, password } = this.props;
        return(
            <>
            <LoginModal visible={visible} error={error} password={password} onKeyPress={handleKeyPress} onLogin={handleLogin} onChange={handleChange} onCancel={handleCancel}/>
            </>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal','login']),
        error : state.base.getIn(['loginModal','error']),
        password : state.base.getIn(['loginModal','password'])

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions,dispatch)
    })
)(LoginModalContainer);