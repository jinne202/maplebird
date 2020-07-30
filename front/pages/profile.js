import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import NicknameEditForm from '../containers/NicknameEditForm';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, UNFOLLOW_USER_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';
import { LOAD_USER_POST_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';
import FollowList from '../components/FollowList';
import { ProfileStyle } from './Style/PagesStyle';

const Profile = () => {
    const dispatch = useDispatch();
    const { followingList, followerList, hasMoreFollower, hasMoreFollowing } = useSelector(state => state.user);
    const { mainPosts, hasMorePost } = useSelector(state => state.post);

    const onUnfollow = useCallback(userId => () => {
        dispatch({
            type : UNFOLLOW_USER_REQUEST,
            data : userId,
        });
    }, []);

    const onRemoveFollower = useCallback(userId => () => {
        dispatch({
            type : REMOVE_FOLLOWER_REQUEST,
            data : userId,
        });
    }, []);

    const loadMoreFollowings = useCallback(() => {
        dispatch({
            type : LOAD_FOLLOWINGS_REQUEST,
            offset : followingList.length,
        })
    }, [followingList.length]);

    const loadMoreFollowers = useCallback(() => {
        dispatch({
            type : LOAD_FOLLOWERS_REQUEST,
            offset : followerList.length,
        })
    }, [followerList.length]);

    return(
        <>
            <ProfileStyle>
                <NicknameEditForm/>
                <FollowList
                    header = "Follower List"
                    hasMore = {hasMoreFollower}
                    onClickMore={loadMoreFollowers}
                    data = {followerList}
                    onClickStop={onRemoveFollower}
                />
                <FollowList
                    header = "Following List"
                    hasMore = {hasMoreFollowing}
                    onClickMore={loadMoreFollowings}
                    data = {followingList}
                    onClickStop={onUnfollow}
                />
                <div>
                    {mainPosts.map(c => (
                        <PostCard key={+c.createdAt} post={c} />
                    ))}
                </div>
            </ProfileStyle>
        </>
    );
};

Profile.getInitialProps = async (context) => {
    const state = context.store.getState();
    // 이 직전에 LOAD_USERS_REQUEST가 _app.js에서 실행된 후 뒤가 실행됨 그래서 load user request가 실행이 끝나야 state.user.me가 생김
    context.store.dispatch({
        type : LOAD_FOLLOWERS_REQUEST,
        data : state.user.me && state.user.me.id,
    });
    context.store.dispatch({
        type : LOAD_FOLLOWINGS_REQUEST,
        data : state.user.me && state.user.me.id,
    });
    context.store.dispatch({
        type : LOAD_USER_POST_REQUEST,
        data : state.user.me && state.user.me.id,
    });
    // 이 쯤에서 LOAD USER USCCESS가 되어 me가 생김! 순서의 문제이다 saga에서 주소가 0일 때 내 정보를 불러오게 처리함!
}

export default Profile;