import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as editorActions from '../../store/modules/editor';
import EditorHeader from '../../compoenets/editor/EditorHeader';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

/*
components/editor/EditorPane 에 EditorPane에 관한 컴포넌트를 구성하고
containers 폴더에서는 해당 컴포넌트가 상태를 가질 때 그 상태와 연동하는 구현을 해준다.
해당 파일에서는 react-redux의 connect 함수를 이용해 고차함수 개념으로 EditorPaneContainer를 
확장시켜준 것을 확인할 수 있다.
*/

class EditorHeaderContainer extends Component{

    componentDidMount() {
        const {EditorActions, location} = this.props;
        EditorActions.initialize();

        const {id} =queryString.parse(location.search);
        if(id){
            EditorActions.getPost(id);
        }
    }

    handleGoBack = () => {
        const {history} = this.props;
        history.goBack();
    }

    handleSumit =  async() => {
        const { title, markdown, tags, EditorActions, history,location } = this.props;
        const {id} = queryString.parse(location.search);
        const post = {
            title,
            body: markdown,
            tags : tags === ''? []:[...new Set(tags.split(',').map(tag=>tag.trim()))] 
        };
        try {
            if(id){
                await EditorActions.editPost({id, ...post});
                history.push(`/post/${id}`);
                return;
            }
            await EditorActions.writePost(post);
            //routing을 하드웨어적으로 보내버리는 API
            history.push(`/post/${this.props.postId}`);
        }
        catch(e) {
            console.log(e);
        }
    }

    render(){
        const {handleGoBack,handleSumit} = this;
        const {id} = queryString.parse(this.props.location.search);
        return(
           <EditorHeader
                onGoBack={handleGoBack}
                onSubmit={handleSumit}
                isEdit = {id}
            />
        );
    }
}

/*리덕스와 리액트를 연결하는 해당 코드에 대해서는 꾸준히 공부해야 할 것 같다.*/
export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags'),
        postId: state.editor.get('postId')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(withRouter(EditorHeaderContainer));

