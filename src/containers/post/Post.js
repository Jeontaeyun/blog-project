import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as baseActions from '../../store/modules/base';
import * as postActions from '../../store/modules/post';
import PostBody from '../../compoenets/post/PostBody';
import PostInfo from '../../compoenets/post/PostInfo';
import {Helmet} from 'react-helmet';
import removeMd from 'remove-markdown';
class Post extends Component {
    initialize = async () => {
        const {PostActions, id} = this.props;
        try{
            await PostActions.getPost(id);
        }
        catch(e){
            console.log(e);
        }
    }
    
    componentDidMount() {
        this.initialize();
    }

    render() {
        const {loading, post} = this.props;
        //console.log(this.props);
        //이때 console.log를 찍어봤자 DidMount된 후에 initialize가 되므로 적용되지 않는다.
     
        if(loading) return null;

        const {title, body, publishedDate, tags} = post.toJS();
        
        return(
            <div>
            {body&&
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={removeMd(body).slice(0,200)}/>
                </Helmet>
            }
                <PostInfo
                    title = {title}
                    publishedDate = {publishedDate}
                    tags = {tags}
                />
                <PostBody body={body}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        post: state.post.get('post'),
        loading: state.pender.pending['post/GET_POST']      // 로딩 상태
    }),
    (dispatch) => ({
        PostActions : bindActionCreators(postActions, dispatch),
        BaseActions : bindActionCreators(baseActions, dispatch)
    })
)(Post);