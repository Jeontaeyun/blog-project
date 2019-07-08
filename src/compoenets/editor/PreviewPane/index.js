/*마크다운이 HTML로 렌더링되는 영역*/
import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PreviewPane = ({children}) => {

    return(
    <>
        <div className={cx('list-wrapper')}>
            {children}
        </div>
    </>
    );
};

export default PreviewPane;