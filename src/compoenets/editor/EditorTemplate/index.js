/*에디터 페이지를 위한 템플릿입니다. 여기에서 리사이즈 기능을 구현합니다.*/
import React, {Component} from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {

    state = {
        leftPercentage: 0.5
    }

    handleMouseMove = (e) => {
        this.setState({
            leftPercentage: e.clientX / window.innerWidth
        });
    }

    handleMouseUp = (e) => {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    handleSeparatorMouseDown = (e) => {
        document.body.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        const {header, editor, preview} = this.props;
        const {leftPercentage} = this.state;
        const {handleSeparatorMouseDown} = this;

        const leftStyle = {
            flex: leftPercentage
        };

        const rightStyle = {
            flex: 1- leftPercentage
        }

        const separatorStyle = {
            left: `${leftPercentage * 100}%`
        }

        return(
            <div className={cx('editor-template')}>
                {header}
                <div className={cx('panes')}>
                    <div className={cx('pane','editor')} style = {leftStyle}>
                        {editor}
                    </div>
                    <div className={cx('pane','preview')} style = {rightStyle}>
                        {preview}
                    </div>
                    <div className={cx('separator')} style = {separatorStyle} onMouseDown = {handleSeparatorMouseDown}/>
                </div>
            </div>
        );
    }
}

export default EditorTemplate;