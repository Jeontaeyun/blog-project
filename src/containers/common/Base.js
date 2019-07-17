import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../store/modules/base';
import LoginModalContainer from '../modal/LoginModalContainer';

class Base extends Component {
    initialize = async () => {
        const {BaseActions} = this.props;
        await BaseActions.checkLogin();
    };

    componentDidMount() {
        this.initialize();
    }
    render(){
        return(
            <>
            <LoginModalContainer/>
            {/*전역적으로 사용하는 컴포넌트들이 이ㅣㅆ다면 여기에서 렌더링합니다.*/}
            </>
        );
    }
}

export default connect(
    null,
    (dispatch)=>({
        BaseActions : bindActionCreators(baseActions,dispatch)
    })
)(Base);