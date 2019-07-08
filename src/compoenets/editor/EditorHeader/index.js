import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorHeader = ({children}) => {

    return(
    <>
        <div className={cx('list-wrapper')}>
            {children}
        </div>
    </>
    );
};

export default EditorHeader;