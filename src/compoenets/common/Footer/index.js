import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = (props) => {
    const {onLoginClick, logged} = props;

    return(
    <>
        <footer className={cx('footer')}>
            <Link to='/' className={cx('brand')}>Stark</Link>
            <div className={cx('admin-login')} onClick={onLoginClick}>{logged ? '관리자 로그아웃' : '관리자 로그인'}</div>
        </footer>
    </>
    );
};

export default Footer;