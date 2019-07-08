/* 글을 작성하는 영역 */
import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorPane = ({children}) => {

    return(
    <>
        <div className={cx('list-wrapper')}>
            {children}
        </div>
    </>
    );
};

export default EditorPane;