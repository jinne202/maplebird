import styled from 'styled-components';
import { Row, Menu, Input } from 'antd';
const { Search } = Input;

export const RowStyle = styled(Row)`
    margin : 0;
`

export const MenuWrapper = styled(Menu)`
`

export const MenuItemStyle = styled(Menu.Item)`
    padding : 3px 0;
    font-size : 17px;
    width : 150px;
    text-align : center;
    font-weight : 600;

    & > Link > a {
        color : black;
    }
`

export const MenuMargin = styled(MenuItemStyle)`
    margin-left : 9%;
`

export const InputMenuStyle = styled(Menu.Item)`
    padding : 3px 20px;
`

export const SearchBarStyle = styled(Search)`
    & input {
        border : 2px solid #ffa940;
        border-radius : 30px;
        width : 250px;
        height : 35px;
        padding : 5px 13px;
        display : inline-block;
        color : #333;
    }
`