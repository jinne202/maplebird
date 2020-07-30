import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FollowButtonStyle , UNFollowButtonStyle } from './Style/FollowButtonStyle';

const FollowButton = ({ post, onUnfollow, onFollow }) => {
    const { me } = useSelector(state => state.user);
    return (
        !me || post.User.id === me.id
        ?
        null
        : me.Followings && me.Followings.find(v => v.id === post.User.id) //내가 이미 팔로우 한 사용자
        ? <UNFollowButtonStyle onClick={ onUnfollow(post.User.id) }>UnFollow</UNFollowButtonStyle>
        : <FollowButtonStyle onClick={ onFollow(post.User.id) }>Follow</FollowButtonStyle>
    );
};

FollowButton.propTypes = {
    post : PropTypes.object.isRequired,
    onUnfollow : PropTypes.func.isRequired,
    onFollow : PropTypes.func.isRequired,
};

export default FollowButton;