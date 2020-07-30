import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import { CommentFormStyle, CommentFormItemStyle, CommentSubmitBtn } from './Style/ContainerStyle'

const CommentForm = ({ post }) => {
    const [commentText, setCommentText] = useState('');
    const { commentAdded, isAddingComment } = useSelector(state => state.post);
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if (!me) {
            return alert('로그인이 필요합니다');
        }
        return dispatch({
            type : ADD_COMMENT_REQUEST,
            data : {
                postId : post.id,
                content : commentText,
            },
        });
    }, [me && me.id, commentText]);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    return (
        <CommentFormStyle onSubmit={onSubmitComment}>
            <CommentFormItemStyle>
                <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </CommentFormItemStyle>
            <CommentSubmitBtn htmlType="submit" loading={isAddingComment}>삐약</CommentSubmitBtn>
        </CommentFormStyle>
    );
};

CommentForm.propTypes = {
    post : PropTypes.object.isRequired,
}

export default CommentForm;