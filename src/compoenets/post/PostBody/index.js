import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostBody = () => {

    return(
    <>
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
                내용
            </div>
        </div>
    </>
    );
};

export default PostBody;