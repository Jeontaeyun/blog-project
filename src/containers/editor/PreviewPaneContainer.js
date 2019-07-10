import React, {Component} from 'react';
import {connect} from 'react-redux';
import PreviewPane from '../../compoenets/editor/PreviewPane';

/*
components/editor/EditorPane 에 EditorPane에 관한 컴포넌트를 구성하고
containers 폴더에서는 해당 컴포넌트가 상태를 가질 때 그 상태와 연동하는 구현을 해준다.
해당 파일에서는 react-redux의 connect 함수를 이용해 고차함수 개념으로 EditorPaneContainer를 
확장시켜준 것을 확인할 수 있다.
*/

class PreviewPaneContainer extends Component{

    render(){
        const {markdown, title} = this.props;
        return(
            <PreviewPane
                title = {title}
                markdown = {markdown}
            />
        );
    }
}

/*리덕스와 리액트를 연결하는 해당 코드에 대해서는 꾸준히 공부해야 할 것 같다.*/
export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
    })
)(PreviewPaneContainer);
