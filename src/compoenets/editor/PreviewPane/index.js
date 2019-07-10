/*마크다운이 HTML로 렌더링되는 영역*/
import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import MarkdownRedner from '../../common/MarkdownRender';

const cx = classNames.bind(styles);

const PreviewPane = ({title, markdown}) => {

    return(
        <div className={cx('preview-pane')}>
            <h1 className={cx('title')}>{title}</h1>
            <div><MarkdownRedner markdown = {markdown}/></div>
        </div>
    );
};

export default PreviewPane;