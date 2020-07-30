import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';

const HashTag = ({ tag }) => {
    const dispatch = useDispatch();
    const { mainPosts, hasMorePost } = useSelector(state => state.post);

    const onScroll = useCallback(() => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
          if (hasMorePost) {
            dispatch({
              type : LOAD_HASHTAG_POSTS_REQUEST,
              lastId : mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
              data : tag,
            });
          }
        }
      }, [hasMorePost, mainPosts.length, tag]);
      
      useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        }
      }, [mainPosts.length, hasMorePost, tag]);

    return(
        <div>
            {mainPosts.map(c => (
                <PostCard key={c.id} post={c} />
            ))}
        </div>
    )
}

HashTag.propTypes = {
    tag : PropTypes.string.isRequired,
};

// getInitialProps = 이건 method가 하나 생긴다! 얘는 context라는 매개변수를 받는다 이거 사용하려면 _app.js에서 nodebird getinitialProps를 사용해야한다
HashTag.getInitialProps = async (context) => {
    const {tag} = context.query;
    console.log('hashtag getInitialProps', tag);
    context.store.dispatch({
        type : LOAD_HASHTAG_POSTS_REQUEST,
        data : tag,
    });
    return { tag };
};

export default HashTag;