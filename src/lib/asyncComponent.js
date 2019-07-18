/* 컴포넌트를 비동기적으로 불러올 수 있게 하는 함수*/

import React from 'react';

export default function asyncComponent(getComponent) {
    class AsyncComponent extends React.Component {
        static Component = null;

        state = {Component: AsyncComponent.Component};

        constructor(props){
            super(props);
            if(AsyncComponent.Component) return;
            getComponent().then(({default : Component}) => {
                AsyncComponent.Component = Component;
                this.setState({Component});
            })
        }
        render(){
            const {Component} = this.state;
            if(Component){
                return <Component {...this.props}/>
            }
            return null;
        }
    }
    /*
    Dynamic Import라는 웹팩 내장 기능을 사용해서 코드 스플리팅을 진행한다. 
    서버사이드 렌더링과 코드 스플리팅을 함께 구현할 때 발생할 수 있는 깜빡임 현상을 해결하는 데 사용합니다.
    */
    AsyncComponent.getComponent = () => {
        return getComponent().then(({default : Component}) => {
            AsyncComponent.Component = Component;
        });
    }
    return AsyncComponent;
}