import React, { useEffect, useCallback, useRef } from 'react';
import PostForm from '../containers/PostForm';
import PostCard from '../containers/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MAIN_POST_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePost } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const countRef = useRef([]);

  const onScroll = useCallback(() => {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (hasMorePost) {
        const lastId = mainPosts[mainPosts.length - 1].id;
        if (!countRef.current.includes(lastId)){
          dispatch({
            type : LOAD_MAIN_POST_REQUEST,
            lastId,
          });
          countRef.current.push(lastId);
        }
      }
    }
  }, [hasMorePost, mainPosts.length]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]);

  return (
      <div>
        {me && <PostForm/>}
        {mainPosts.map((c) => {
          return (
            <PostCard key={c.id} post={c} commentOpened = {false}/>
          )
        })}
      </div>
  );
};

Home.getInitialProps = async (context) => {
  console.log(Object.keys(context));
  context.store.dispatch({
    type: LOAD_MAIN_POST_REQUEST,
  });
};

export default Home;