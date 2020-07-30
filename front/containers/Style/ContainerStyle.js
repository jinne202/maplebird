import styled from 'styled-components';
import { Form, Input, Button, Card, Avatar, Comment, message } from 'antd';

export const LoginFormStyle = styled(Form)`
    margin : 20px 20px 20px;

    & label {
        font-size : 16px;
        color : #ffa940;
        margin : 5px 0;
        display : inline-block;
        font-weight : 600;
    }
`

export const LoginFormButton = styled(Button)`
    width : 48%;
    margin-top : 10px;
`


export const PlusMarginBtn = styled(LoginFormButton)`
    margin-left : 4%;
`

export const NickFormStyle = styled(Form)`
    margin-bottom : 20px;
    padding : 20x;
`

export const NickFormnInput = styled(Input)`
    width : 80%;
    margin-right : 10px;
`

export const NickChangeBtn = styled(Button)`
    width : 17%;
    background-color : #ffa940;
    border : 1px solid #ffa940;

    &:hover {
        background-color : #ff7a45;
        border : 1px solid #ff7a45;
    }
`

export const CardWrapper = styled.div`
    margin : 10px 0;
`;

export const DateSpan = styled.span`
    float : right;
`
export const PostFormStyle = styled(Form)`
    margin : 20px 0 20px;
`

export const TwitBtn = styled(Button)`
    float : right;
    margin : 8px 0 0;
`

export const ThumbImg = styled.div`
    display : inline-block;
    width : 30%;
    margin : 10px 10px;
    top : 0;

    & img {
        width : 100%;
    }
`

export const ThumRemoveBtn = styled(Button)`
    width : 80%;
    margin : 7px auto 0;
    display :block;

    &:hover {
        background : #ffd591;
        border : 1px solid #ff7a45;
        color : #ff7a45;
    }
`

export const ImageUploadBtn = styled(Button)`
    margin : 8px 0 0;
    &:hover {
        border : 1px solid #ffa940;
        color : #ffa940;
    }
`

export const UserProfileCard = styled(Card)`
    margin : 20px 0 20px;

    & > div {
        padding : 24px 24px 15px 24px;
    }
`

export const CardAvatar = styled(Avatar)`
    background-color : #40a9ff;
    vertical-align : middle;
    margin : 0;
`

export const LogoutButton = styled(Button)`
    margin : 5px 0 0 0;

    &:hover {
        border : 1px solid #ffa940;
        color : #ffa940;
    }
`

export const CommentFormStyle = styled(Form)`
    margin : 10px 0 0;
    position : relative;
    display : inline-block;
    width : 100%;
`

export const CommentFormItemStyle = styled(Form.Item)`
    margin : 0;
`

export const CommentSubmitBtn = styled(Button)`
    width : 100px;
    float : right;
    border : 1px solid #ffa940;
    color : #ffa940;
    &:hover {
        border : 2px solid #ff9c6e;
        color : #ff9c6e;
        font-weight : 600;
        background-color : #ffe58f;
    }
`

export const PostCardAtag = styled.a`
    color : black;
    display : inline;

    &:hover {
        color : black;
    }
`

export const PostCardDesAtag = styled.a`
    color : #8c8c8c;

    &:hover {
        color : #8c8c8c;
    }
`

export const CommentWrapper = styled.li`
    position : relative;
`

export const CommentStyle = styled(Comment)`
    width : 80%;
`

export const CommentRemoveBtn = styled(Button)`
    border : 1px solid #1890ff;
    color : #1890ff;
    position : absolute;
    right : 10px;
    top : 30%;

    &:hover {
        color : #fff;
        border : 1px solid #ff4d4f;
        background-color : #ff4d4f;
    }
`

export const LoginError = styled.div`
    margin : 10px 0 0 0;
    color : #ff4d4f;
`