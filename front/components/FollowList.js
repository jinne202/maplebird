import React, { memo } from 'react';
import { Card, Icon } from 'antd';
import PropTypes from 'prop-types';
import { FollowListStyle, FollowListItem, MoreBtn, TitleText } from './Style/FollowListStyle';

const FollowList = memo(({ header, hasMore, onClickMore, onClickStop, data}) => {
    return (
    <FollowListStyle
        grid = {{gutter : 4, xs : 2, md : 3}}
        size = "small"
        header = {<TitleText>{header}</TitleText>}
        loadMore = {hasMore && <MoreBtn onClick={onClickMore}>More</MoreBtn>}
        bordered
        dataSource = {data}
        renderItem = {item => (
            <FollowListItem>
                <Card actions = {[<Icon key="stop" type="stop" onClick={onClickStop(item.id)}/>]}>
                    <Card.Meta description={item.nickname} />
                </Card>
            </FollowListItem>
        )}
    />)
});

FollowList.propTypes = {
    header : PropTypes.string.isRequired,
    hasMore : PropTypes.bool.isRequired,
    onClickMore : PropTypes.func.isRequired,
    onClickStop : PropTypes.func.isRequired,
    data : PropTypes.array.isRequired,
}

export default FollowList;