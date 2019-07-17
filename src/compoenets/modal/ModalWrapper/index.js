import React, {Component} from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/*
HOOKS 문법에 대한 고찰

해당 컴포넌트를 Hooks 문법을 상요해서 구현해 보았는데, Hooks의
useEffect는 컴포넌트가 마운트 될 때 반드시 한 번 실행되기 때문에
오직 update에서만 사용하고 싶다면 상위 컴포넌트 부터 다른 방식을 취해야 한다.

Hooks 문법을 적용한 구조를 짜고 싶었으나 로직 자체가
Hooks 문법과 맞지 않아서 한계에 봉착했다.

이 부분의 로직에 대해서 고민해보자.
*/
class ModalWrapper extends Component {
    state = {
        animate: false
    }

    startAnimation = () => {
        this.setState({
            animate: true
        });
        setTimeout(()=> {
            this.setState({
                animate: false
            });
        },250);
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.visible !== this.props.visible){
            this.startAnimation();
        }
    }

    render(){
        const {visible, children} =this.props;
        const {animate} = this.state;
        const animation = animate && (visible? 'enter' : 'leave');

        if(!animate && !visible) return null;

        return(
                <>
                    <div className={cx('gray-background', animation)}/>
                    <div className={cx('modal-wrapper')}>
                        <div className={cx('modal', animation)}>
                            {children}
                        </div>
                    </div>
                </>
        );
    }
};

export default ModalWrapper;