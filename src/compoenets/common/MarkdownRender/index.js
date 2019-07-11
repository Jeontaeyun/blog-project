import React, {Component} from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

import marked from 'marked';

// prism 관련 소스 불러오기
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRedner extends Component {
    
    state = {
        html: ''
    };

    renderMarkdown = () => {
        const {markdown} = this.props;
        if(!markdown){
            this.setState({
                html: ''
            });
            return;
        }
        this.setState({
            html: marked(markdown, {
                braek: true,                // 일반 엔터로 새 줄 입력
                sanitize: true              // 마크다운 내부 html 무시
            })
        })
    };
    /*
    컴포넌트를 만들 때 호출되는 constructor와 componenetDidUpdate에서 마크다운 변한 작업을 처리해 주었습니다.
    constructor에서 마크다운 변환 작업을 하는 이유는 constructor 함수는 서버 사이드 렌더링을 할 때도 호출되기 때문입니다.
    그러나 이 작업을 componentDidMount에서 한다면 웹 브라우저 쪽에서만 실행하고, 나중에 서버 쪽에서는 호출하지 않습니다.
    */
    constructor(props){
        super(props);
        const {markdown} = props;
        this.state = {
            html: markdown ? marked(props.markdown, {
                break: true,
                sanitize: true
            }) : ''
        }
    }
    componentDidMount(){
        Prism.highlightAll();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.markdown !== this.props.markdown){
            this.renderMarkdown();
        }
        //state가 바뀌면 코드 하이라이팅
        if(prevState.html !== this.state.html){
            Prism.highlightAll();
        }
    }

    render(){
        const {html} = this.state;
        /*리액트에서 html을 렌더링하려면 객체를 만들어 내부에 __html 값을 설정해야 합니다.*/
        const markup = {
            __html : html
        }
        return(
            <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}/>
        );
    };
}

export default MarkdownRedner;