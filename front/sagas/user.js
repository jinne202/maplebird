import { all, fork, takeEvery, put, delay, call } from 'redux-saga/effects';
import axios from 'axios'
import { LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, LOG_IN_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, EDIT_NICKNAME_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS } from '../reducers/user';

function loginAPI(loginData){
    // 서버에 요청을 보내는 부분
    return axios.post('/user/login', loginData, {
        withCredentials : true,
    });
}

function* login(action){
    try {
        const result = yield call(loginAPI, action.data);
        yield put({
            type : LOG_IN_SUCCESS,
            data : result.data, //axios 응답 정보
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : LOG_IN_FAILURE,
            reason: e.response && e.response.data,
        });
    }
}

function* watchLogin(){
    yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData){
    return axios.post('/user/', signUpData);
}

function* signUp(action){
    try {
        yield call(signUpAPI, action.data);
        yield put({
            type : SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : SIGN_UP_FAILURE,
            error : e,
        });
    }
}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function logOutAPI(){
    return axios.post('/user/logout', {}, {
        withCredentials : true,
    });
}

function* logOut(action){
    try {
        yield call(logOutAPI, action.data);
        yield put({
            type : LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : LOG_OUT_FAILURE,
            error : e,
        });
    }
}

function* watchLogOut(){
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI(userId){
    return axios.get( userId ? `/user/${userId}` : '/user/', {
        withCredentials : true,
    });
} // 클라이언트에서 요청 보낼때는 브라우저가 쿠키를 같이 동봉, 서버사이드 렌더링일때는 브라우저가 없다! 그래서 문제가 생김 그러니 직접 넣어야한다

function* loadUser(action){ //자신에 대한 정보 + 남의 정보 같이
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type : LOAD_USER_SUCCESS,
            data : result.data,
            me : !action.data, //action.data가 userId - 만약 userId가 있으면 남, userId가 없으면 내 정보 불러온다
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : LOAD_USER_FAILURE,
            error : e,
        });
    }
}

function* watchLoadUser(){
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function followAPI(userId) {
    return axios.post(`/user/${userId}/follow`, {}, {
        withCredentials: true,
    });
  }

function* follow(action){ //자신에 대한 정보 + 남의 정보 같이
    try {
        const result = yield call(followAPI, action.data);
        yield put({
            type : FOLLOW_USER_SUCCESS,
            data : result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : FOLLOW_USER_FAILURE,
            error : e,
        });
    }
}

function* watchFollow(){
    yield takeEvery(FOLLOW_USER_REQUEST, follow);
}

function unfollowAPI(userId) {
    return axios.delete(`/user/${userId}/follow`, {
        withCredentials: true,
    });
}

function* unfollow(action){ //자신에 대한 정보 + 남의 정보 같이
    try {
        const result = yield call(unfollowAPI, action.data);
        yield put({
            type : UNFOLLOW_USER_SUCCESS,
            data : result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : UNFOLLOW_USER_FAILURE,
            error : e,
        });
    }
}

function* watchUnfollow(){
    yield takeEvery(UNFOLLOW_USER_REQUEST, unfollow);
}

function loadFollowersAPI(userId, offset = 0, limit = 3) {
    // query string 사용 주소 체계 바꾸지 않으면서 부가적인 데이터 서버에 전송
    return axios.get(`/user/${userId || 0}/followers?offset=${offset}&limit=${limit}`, {
        withCredentials: true,
    });
  }

function* loadFollowers(action){
    try {
        const result = yield call(loadFollowersAPI, action.data, action.offset);
        yield put({
            type : LOAD_FOLLOWERS_SUCCESS,
            data : result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : LOAD_FOLLOWERS_FAILURE,
            error : e,
        });
    }
}

function* watchLoadFollowers(){
    yield takeEvery(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function loadFollowingsAPI(userId, offset = 0, limit = 3) {
    return axios.get(`/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {
        withCredentials: true,
    });
  }

function* loadFollowings(action){
    try {
        const result = yield call(loadFollowingsAPI, action.data, action.offset);
        yield put({
            type : LOAD_FOLLOWINGS_SUCCESS,
            data : result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : LOAD_FOLLOWINGS_FAILURE,
            error : e,
        });
    }
}

function* watchLoadFollowings(){
    yield takeEvery(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function removeFollowerAPI(userId) {
    return axios.delete(`/user/${userId}/follower`, {
        withCredentials: true,
    });
  }

function* removeFollower(action){
    try {
        const result = yield call(removeFollowerAPI, action.data);
        yield put({
            type : REMOVE_FOLLOWER_SUCCESS,
            data : result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : REMOVE_FOLLOWER_FAILURE,
            error : e,
        });
    }
}

function* watchRemoveFollower(){
    yield takeEvery(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function editNicknameAPI(nickname) {
    return axios.patch('/user/nickname', {nickname} , {
        withCredentials: true,
    });
  }

function* editNickname(action){
    try {
        const result = yield call(editNicknameAPI, action.data);
        yield put({
            type : EDIT_NICKNAME_SUCCESS,
            data : result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type : EDIT_NICKNAME_FAILURE,
            error : e,
        });
    }
}

function* watchEditNickname(){
    yield takeEvery(EDIT_NICKNAME_REQUEST, editNickname);
}

export default function* userSaga(){
    yield all ([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchRemoveFollower),
        fork(watchEditNickname),
    ]);
}