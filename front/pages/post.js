import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LOAD_POST_REQUEST, LOAD_COMMENT_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';
import { PostCardWrapper } from './Style/PagesStyle';

const Post = ({ id }) => {
    const { singlePost } = useSelector(state => state.post);

    console.log('singlePost', singlePost);
    if (!singlePost) {
      return null;
    }
    return (
        <div>
          <Helmet
            title = {`${singlePost.User.nickname}님의 글`}
            description = {singlePost.content}
            meta = {[{
              name : 'description', content : singlePost.content,
            }, {
              property : 'og:title', content : `${singlePost.User.nickname}님의 게시글`,
            }, {
              property : 'og:description', content : singlePost.content,
            }, {
              property : 'og:image', content : singlePost.Images[0] ? singlePost.Images[0].src : 'http://maple-bird.pe.kr/favicon.ico',
            }, {
              property : 'og:url', content : `http://maple-bird.pe.kr/post/${id}`,
            }]}
          />
          {/* <div>{singlePost.content}</div>
          <div>{singlePost.User.nickname}</div>
          <div>
              {singlePost.Images[0] && <img src={`http://localhost:7070/${singlePost.Images[0].src}`}/>}
          </div> */}
          <PostCardWrapper>
          <PostCard key={singlePost.id} post={singlePost} commentOpened = {true}/>
          </PostCardWrapper>
        </div>
    );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
};

Post.getInitialProps = async (context) => {
  const id = parseInt(context.query.id , 10)
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: id,
  });
  context.store.dispatch({
    type : LOAD_COMMENT_REQUEST,
    data : id,
  });
  console.log('POST getInitialProps', id);
  return { id }
};

export default Post;
