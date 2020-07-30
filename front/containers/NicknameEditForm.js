import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { EDIT_NICKNAME_REQUEST } from '../reducers/user';
import { NickFormStyle, NickFormnInput, NickChangeBtn } from './Style/ContainerStyle';

const NicknameEditForm = () => {
    const [editedName, setEditedName] = useState('');
    const dispatch = useDispatch();
    const { me, isEditingNickname } = useSelector(state => state.user);

    const onChangeNickname = useCallback((e) => {
        setEditedName(e.target.value);
    }, []);
    const onEditNickname = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type : EDIT_NICKNAME_REQUEST,
            data : editedName,
        });
    }, [editedName]);

    return (
        <NickFormStyle onSubmit={onEditNickname}>
            <NickFormnInput addonBefore = "Nickname" value = {editedName} onChange={onChangeNickname} placeholder = {(me && me.nickname)}/>
            <NickChangeBtn type="primary" loading={isEditingNickname} htmlType="submit">Modify</NickChangeBtn>
        </NickFormStyle>
    );
};

export default NicknameEditForm;