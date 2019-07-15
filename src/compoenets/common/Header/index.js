import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

const Header = (props) => {
    const {postId, onRemove} = props;
    return(
    <>
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to='/'>Stark Bolog</Link>
                </div>
                <div className={cx('right')}>
                { postId && <><Button key='edit' theme='outline' to={`/editor?id=${postId}`}>수정</Button>
                <Button key='delete' theme='outline' onClick={onRemove}>삭제</Button></> }
                <Button key='newPost' theme='outline' to='/editor'>새포스트</Button>
                </div>
            </div>
        </header>
    </>
    );
};

export default Header;