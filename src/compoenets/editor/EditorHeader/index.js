/*에디터 위쪽에 위치하는 작성하기 및 취소하기를 구현하는 헤더*/
import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import Button from '../../common/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit, isEdit}) => {
    return(
    <div className={cx('editor-header')}>
        <div className={cx('back')}>
            <Button onClick={onGoBack} theme = 'outline'>뒤로가기</Button>
        </div>
        <div className={cx('submit')}>
            <Button onClick={onSubmit} theme = 'outline'>{isEdit? "수정하기" : "작성하기"}</Button>
        </div>
    </div>
    );
};

export default EditorHeader;