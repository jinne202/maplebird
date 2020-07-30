import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Link from 'next/link';
import { UserProfileCard, LogoutButton, CardAvatar } from './Style/ContainerStyle'

const UserProfile = () => {
    const { me } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch({
            type : LOG_OUT_REQUEST,
        });
    }, []);

    let postLength = me && me.Posts ? me.Posts.length : 0;
    let followingLength = me && me.Followings ? me.Followings.length : 0;
    let followerLength = me && me.Followers ? me.Followers.length : 0;
    
    return (
        <UserProfileCard actions = {[
            <Link href="/profile" prefetch key="twit"><a><div>짹짹<br/>{postLength}</div></a></Link>,
            <Link href="/profile" prefetch key="following"><a><div>팔로윙<br/>{followingLength}</div></a></Link>,
            <Link href="/profile" prefetch key="follower"><a><div>팔로워<br/>{followerLength}</div></a></Link>
        ]}>
        <Card.Meta
            avatar = {<CardAvatar size={32}>{me.nickname[0]}</CardAvatar>}
            title = {me.nickname}
        />
        <LogoutButton onClick = {onLogout}>LOGOUT</LogoutButton>
        </UserProfileCard>
    )
}

export default UserProfile;