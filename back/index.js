const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const hpp = require('hpp');
const helmet = require('helmet');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');

const prod = process.env.NODE_ENV === 'production';

//const prod = process.env.NODE_ENV === 'production';
dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
        origin : 'http://maple-bird.pe.kr',
        credentials : true,
    }));
} else {
    app.use(morgan('dev'));
    // cors 이 부분이 새로고침해도 도메인 연결 풀리지 않게 하는거
    app.use(cors({
        origin : true,
        credentials : true,
    }));
}


// express 안에 static이라는 middleware가 있는데 그 안에 있는 파일을 다른 서버에서 자유롭게 가져갈 수 있게 하는 역할 uploads 경로를 root 폴더처럼 쓸 수 있게 하겠다 front에서 접근할 수 있는 경로를 바꾸는 것!
app.use('/', express.static('uploads'));
// json 형식의 본문 처리
app.use(express.json());
// form으로 넘어온 데이터 처리
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser(process.env.COOKIE_SECRET)); //'nodebirdCookie'도 secrete
app.use(expressSession({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true, //js로 쿠키 접근 불가
        secure : false, //https 쓸 떄 true로
        domain : prod && '.maple-bird.pe.kr', //무조건 . 점을 붙여야한다!!!
    },
    name : 'hellornbck'
}));
app.use(passport.initialize());
// passport session은 무조건 expression session 미들웨어 밑에 적어줘야 한다
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('react nodebird backend clear!');
});

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(prod ? process.env.PORT : 7070, () => {
    console.log(`server is running on localhost:${process.env.PORT}`);
});