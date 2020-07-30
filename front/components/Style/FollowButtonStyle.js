import styled from 'styled-components';
import { Button } from 'antd';

export const FollowButtonStyle = styled(Button)`
    border : 1px solid #ffa940;
    color : #ffa940;

    &:hover {
        background-color : #ffd591;
        border : 1px solid #ff7a45;
        color : #ff7a45;
    }
`

export const UNFollowButtonStyle = styled(Button)`
    border : 1px solid #40a9ff;
    color : #40a9ff;

    &:hover {
        background-color : #bae7ff;
        border : 1px solid #1890ff;
        color : #1890ff;
    }
`