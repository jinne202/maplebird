import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../containers/PostCard';
import { Avatar, Card } from 'antd';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_USER_POST_REQUEST } from '../reducers/post';
import { UserCardWrapper } from './Style/PagesStyle';

const User = () => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);
    const { userInfo } = useSelector(state => state.user);

    return(
        <UserCardWrapper>
            { userInfo
                ? ( <Card
                    actions = {[
                        <div key="twit">짹짹 <br/> {userInfo.Posts} </div>,
                        <div key="following">팔로잉 <br/> {userInfo.Followings} </div>,
                        <div key="follower">팔로워 <br/> {userInfo.Followers} </div>,
                    ]}>
                    <Card.Meta
                        avatar = {<Avatar>{userInfo.nickname[0]}</Avatar>}
                        title = {userInfo.nickname}
                    />
                </Card>
                )
                : null}
            { mainPosts.map(c => (
                <PostCard key = {c.id} post = {c} />
            )) }
        </UserCardWrapper>
    );
};
    User.getInitialProps = async (context) => {
        const id = parseInt(context.query.id, 10);
        console.log('user getInitialProps', id);
        context.store.dispatch({
          type: LOAD_USER_REQUEST,
          data: id,
        });
        context.store.dispatch({
          type: LOAD_USER_POST_REQUEST,
          data: id,
        });
        // 서버쪽에서 완성된 데이터들이 여기서 돌아오는 것 next가 getInitialPorps로 ssr을 편하게 한다! 
        return { id };
};

export default User;