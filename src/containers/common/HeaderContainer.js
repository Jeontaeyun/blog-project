import React, {Component} from 'react';
import Header from '../../compoenets/common/Header';
import {withRouter} from 'react-router-dom';

class HeaderContainer extends Component{
    
    handleRemove = () => {

    }

    render(){
        const {handleRemove} = this;
        const{ match } = this.props;
        const {id} = match.params;
        
        return(
           <Header postId={id} onRemove={handleRemove}/>
        );
    }
}

/*리덕스와 리액트를 연결하는 해당 코드에 대해서는 꾸준히 공부해야 할 것 같다.*/
export default withRouter(HeaderContainer);