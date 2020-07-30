import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router'
import LoginForm from '../containers/LoginForm';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from '../containers/UserProfile';
import { useSelector } from 'react-redux';
import { RowStyle, MenuWrapper, MenuMargin, SearchBarStyle, MenuItemStyle, InputMenuStyle } from './Style/AppLayoutStyle'

const AppLayout = (props) => {
    const { me } = useSelector(state => state.user);
    const {
        children
    } = props;

    const onSearch = (value) => {
        Router.push({ pathname : '/hashtag', query : {tag : value}}, `/hashtag/${value}`);
    };

    return (
        <div>
            <MenuWrapper mode="horizontal" style={{position : 'fixed', width : '100%', zIndex : '999'}}>
                <MenuMargin key="home"><Link href="/"><a>AMUNA</a></Link></MenuMargin>
                <MenuItemStyle key="profile"><Link href="/profile" prefetch><a>PROFILE</a></Link></MenuItemStyle>
                <InputMenuStyle key="mail">
                    <SearchBarStyle
                        onSearch = {onSearch}
                    />
                </InputMenuStyle>
            </MenuWrapper>
            <RowStyle gutter = {20} justify="center" style={{margin : '0'}}>
                <Col sm={24} md={0} lg={2}>
                </Col>
                <Col sm={24} md={9} lg={5} style={{margin : '60px 0'}}>
                    {me ?
                    <UserProfile/>
                    :
                    <LoginForm/>
                    }
                </Col>
                <Col sm={24} md={13} lg={10} style={{margin : '60px 0'}}>
                    {children}
                </Col>
                <Col sm={24} md={2} lg={5}>
                </Col>
                <Col sm={24} md={0} lg={2}>
                </Col>
            </RowStyle>
        </div>
    )
}

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;