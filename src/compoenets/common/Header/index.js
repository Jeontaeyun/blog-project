import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

const Header = () => {
    return(
    <>
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to='/'>Stark Bolog</Link>
                </div>
                <div className={cx('right')}>
                    <Button theme='outline' to='/editor'>새포스트</Button>
                </div>
            </div>
        </header>
    </>
    );
};

export default Header;