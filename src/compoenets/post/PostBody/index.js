import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import MarkdownRedner from '../../common/MarkdownRender';

const cx = classNames.bind(styles);

const PostBody = (props) => {
    const {body} = props;
    return(
    <>
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
                <MarkdownRedner markdown={body}/>
            </div>
        </div>
    </>
    );
};

export default PostBody;