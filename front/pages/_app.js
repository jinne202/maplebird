import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';
import { LOAD_USER_REQUEST } from '../reducers/user';
import axios from 'axios';
import Helmet from 'react-helmet';
import { Container } from 'next/app';

const NodeBird = ({ Component, store, pageProps }) => {
    return (
        <Container>
            {/* provider이 가장 최상위 부모라 그 아래 자식들이 provider에 접근할 수 있음 */}
            <Provider store = {store}>
                <Helmet
                    title = "MAPLE AMUNA"
                    htmlAttributes = {{ lang: 'ko' }}
                    meta = {[{
                        charset: 'UTF-8',
                    }, {
                        name : 'viewport',
                        content : 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
                    }, {
                        'http-equiv' : 'X-UA-Compatible', content : 'IE=edge',
                    }, {
                        name : 'description', content : 'JINNE NODEBIRD',
                    }, {
                        name : 'og:description', content : 'JINNE NODEBIRD'
                    }, {
                        name : 'og:title', content : 'MAPLE AMUNA'
                    }, {
                        property : 'og:type', content : 'website',
                    }, {
                        property: 'og:image', content: 'http://maple-bird.pe.kr/favicon.ico',
                    }]}
                    link = {[{
                        rel: 'shortcut icon', href: '/favicon.ico',
                    },
                        {
                        rel : 'StyleSheet', href : 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.9/antd.css'
                    }, {
                        rel : 'stylesheet', href : 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                    }, {
                        rel : 'stylesheet', href : 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
                    }]}
                />
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </Provider>
        </Container>
    )
};


NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
    store : PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
};

// next에서 실행시켜주는 부분
NodeBird.getInitialProps = async (context) => {
    const { ctx, Component } = context;
    let pageProps = {};
    const state = ctx.store.getState();
    const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    if (!state.user.me) {
        ctx.store.dispatch({
            type: LOAD_USER_REQUEST,
            // 쿠키로 정보 불러오게 원래 AppLayout 안에 들어있던거 갖고온 것 순서가 중요! 내 정보 먼저 가져오고 밑에 component.getInitialProps 사용
        });
    }
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx) || {};
    }
    return { pageProps };
};

// 고차 컴포넌트라고 부름 기존 component의 기능을 확장해준다. withRedux라는게 Nodebird component에 props로 store을 넣어주는 역할을 한다. 그 store을 어떻게 넣어줄지를 적어야 함
// 그냥 외우는게 좋다 어차피 모든 프로젝트에 다 똑같이 쓰인다
const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    // 넣고싶은 미들웨어는 [] 여기 안에다가
    const middlewares = [sagaMiddleware];
    // const middlewares = [sagaMiddleware, (store) => (next) => (action) => {
    //     console.log(action);
    //     next(action);
    // }];
    // 리덕스의 기능을 향상시키다 middleware을 apply해서!
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
        applyMiddleware(...middlewares),
        // typeof window !== 'undefined' 은 !options.isServer랑 같다
        // __REDUX_DEVTOOLS_EXTENSION__ 이거는 배포할때는 거의 뺀다 redux가 어떻게 돌아가는지 노출되어버림
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      );
    const store = createStore(reducer, initialState, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    // 이 부분은 별로 바뀔 일이 없다 연결하는 부분!
    return store;
  };

export default withRedux(configureStore)(withReduxSaga(NodeBird));