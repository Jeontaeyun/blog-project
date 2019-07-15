import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const PostItem = ({item}) => {
    
    return(
    <> 
        <Link to={`/post/${item._id}`}><div className={cx('post-item')}>
            <h2><a>{item.title}</a></h2>
            <div className={cx('date')}>{moment(item.publishedDate).format('ll')}</div>
            <p>{removeMd(item.body)}</p>
            <div className={cx('tags')}>
               {item.tags.map(tag=>(<a key={tag}>#{tag}</a>))}
            </div>
        </div></Link>
    </>
    );
};

const PostList = (props) => {
    let list = (props.list.length>1)? props.list : [];
    const postList = list ? list.map(item => (<PostItem key={item._id} item = {item}/>)): '';
    return(
        <div className={cx('post-list')}>
            {postList}
        </div>
    );
}

export default PostList;