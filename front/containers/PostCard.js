import React, { useState, useCallback, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Icon, Button, Avatar, List, Comment, Popover } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';
import { LOAD_COMMENT_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, RETWEET_REQUEST, REMOVE_POST_REQUEST, REMOVE_COMMENT_REQUEST } from '../reducers/post';
import PostImages from '../components/PostImages';
import PostCardContent from '../components/PostCardContent';
import CommentForm from './CommentForm';
import moment from 'moment';
import FollowButton from '../components/FollowButton';
import { CardWrapper, DateSpan, PostCardAtag, PostCardDesAtag, CommentWrapper, CommentStyle, CommentRemoveBtn } from './Style/ContainerStyle';
import Router from 'next/router';
import { useEffect } from 'react';

moment.locale('ko');

const PostCard = memo(({ post, commentOpened }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(commentOpened);
    const id = useSelector(state => state.user.me && state.user.me.id);
    const dispatch = useDispatch();

    const liked = id && post.Likers && post.Likers.find(v => v.id === id);
    const onToggleComment = useCallback(() => {
        // 펼쳐져있으면 닫고 닫혀있으면 펼치고
        setCommentFormOpened(prev => !prev);
        if (!commentFormOpened) {
            dispatch({
                type : LOAD_COMMENT_REQUEST,
                data : post.id,
            });
        }
    }, []);

    const onToggleLike = useCallback(()=> {
        if (!id) {
            return alert('로그인이 필요합니다');
        }
        // likers 안에 좋아요 누른 사람들의 배열이 들어있음
        if (liked) { //좋아요 누른 상태
            dispatch({
                type : UNLIKE_POST_REQUEST,
                data : post.id
            })
        } else { //좋아요 안 누른 상태
            dispatch({
                type : LIKE_POST_REQUEST,
                data : post.id
            })
        }
    }, [id, post && post.id, liked]);

    const onRetweet = useCallback(() => {
        if(!id){
            return alert('로그인이 필요합니다');
        }
        return dispatch({
            type : RETWEET_REQUEST,
            data : post.id,
        });
    }, [id , post && post.id]);

    const onFollow = useCallback(userId => () => {
        dispatch({
            type : FOLLOW_USER_REQUEST,
            data : userId,
        });
    }, []);

    const onUnfollow = useCallback(userId => () => {
        dispatch({
            type : UNFOLLOW_USER_REQUEST,
            data : userId,
        });
    }, []);

    const onRemovePost = useCallback(postId => () => {
        dispatch({
            type : REMOVE_POST_REQUEST,
            data : postId,
        });
        Router.push('/');
    }, []);

    const onRemoveComment = useCallback(commentId => () => {
        dispatch({
            type : REMOVE_COMMENT_REQUEST,
            data : {
                commentId,
                postId : post.id
            }
        });
    }, []);

    return (
        <CardWrapper>
            <Card
                // cover = {post.Images[0] && <img alt="example" src={`http://localhost:7070/` + post.Images[0].src}/>}
                cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}
                actions = {[
                    <Icon type="retweet" key="retweet" onClick={onRetweet}/>,
                    <Icon type="heart" key="heart" theme={liked ? 'twoTone' : 'outlined'} twoToneColor="#ff7a45" onClick={onToggleLike}/>,
                    <Icon type="message" key="message" onClick={onToggleComment}/>,
                    <Popover
                        key="ellipsis"
                        content={(
                        <Button.Group>
                            {id && post.UserId === id
                            ? (
                                <>
                                <Button type="danger" onClick={onRemovePost(post.id)}>삭제</Button>
                                </>
                            )
                            : <Button>신고</Button>}
                        </Button.Group>
                        )}
                    >
                        <Icon type="ellipsis" />
                    </Popover>,
                ]}
                title = {post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다` : <span >{moment(post.createdAt).format('YYYY.MM.DD.')}</span>}
                //로그인을 안 했다면 버튼이 보이지 않음
                extra = {<FollowButton post = {post} onUnfollow={onUnfollow} onFollow={onFollow} />}
            >
                {post.RetweetId && post.Retweet
                ? (
                <Card cover = {post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}>
                    <DateSpan>{moment(post.createdAt).format('YYYY.MM.DD.')}</DateSpan>
                    <Card.Meta
                        avatar = {<Link href = {{pathname : '/user', query : { id : post.Retweet.User.id } }} as = {`/user/${post.Retweet.User.id}`}><a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a></Link>}
                        title = {<Link href = {{pathname : '/user', query : { id : post.Retweet.User.id } }} as = {`/user/${post.Retweet.User.id}`}><PostCardAtag>
                        {post.Retweet.User.nickname}</PostCardAtag></Link>}
                        description = {
                            <Link href = {{ pathname : '/post', query : { id : post.RetweetId ? post.RetweetId : post.id } }} as = {`/post/${post.RetweetId ? post.RetweetId : post.id}`}>
                                <PostCardDesAtag>
                                <PostCardContent postData={post.Retweet.content}/>
                                </PostCardDesAtag>
                            </Link>}
                    />
                </Card>
                ) : (
                    <Card.Meta
                        avatar = {<Link href = {{ pathname : '/user', query : { id : post.User.id } }} as = {`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
                        title = {<Link href = {{pathname : '/user', query : { id : post.User.id } }} as = {`/user/${post.User.id}`}><PostCardAtag>{post.User.nickname}</PostCardAtag></Link>}
                        description = {
                            <Link href = {{ pathname : '/post', query : { id : post.RetweetId ? post.RetweetId : post.id } }} as = {`/post/${post.RetweetId ? post.RetweetId : post.id}`}>
                                <PostCardDesAtag>
                                <PostCardContent postData={post.content}/>
                            </PostCardDesAtag>
                            </Link>
                        }
                    />
                )}
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post}/>
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} reply`}
                        itemLayout = "horizontal"
                        dataSource = {post.Comments || []}
                        renderItem = {item => (
                            <CommentWrapper>
                                <CommentStyle
                                    author = {item.User.nickname}
                                    avatar = {<Link href = {{ pathname : '/user', query : { id : item.User.id } }} as = {`/user/${item.User.id}`}><a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                                    content = {item.content}
                                />
                                {id && item.User.id === id
                                ?
                                <CommentRemoveBtn onClick={onRemoveComment(item.id)}>삭제</CommentRemoveBtn>
                                :
                                null}
                            </CommentWrapper>
                        )}
                    />
                </>
            )}
        </CardWrapper>
    );
});

PostCard.propTypes = {
    post : PropTypes.shape({
        User : PropTypes.object,
        content : PropTypes.string,
        img : PropTypes.string,
        createdAT : PropTypes.string,
    }),
};

export default PostCard;