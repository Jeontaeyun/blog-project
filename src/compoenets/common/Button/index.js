import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme = 'default'}) => {
    
    // 이와 같이 props 값을 조작해서 컴포넌트를 선택적으로 주어줄 수도 있다.
    
    const Element = (to && !disabled)? Link : Div;

    return(
    <>
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled? () => null : onClick}>
                {children}
        </Element>
    </>
    );
};

export default Button;