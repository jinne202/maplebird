import React, { useState, useEffect, useCallback, memo } from 'react';
// import Head from 'next/head';
// import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd'
import PropTypes from 'prop-types';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SignUpError, SignUpConfirm } from './Style/PagesStyle';

const TextInput = ({ value }) => (
    <div>{value}</div>
);

TextInput.propTypes = {
    value: PropTypes.string,
};

// custom hook -!
export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler];
};
// 커스텀 훅을 만들 수 있음. 중복되는 것들!

export const idCheck = (id) => {
    const idCheckRegex = /^[a-z0-9]{4,12}$/;
    return idCheckRegex.test(id);
}

export const nickCheck = (nick) => {
    const nickCheckRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;
    return nickCheckRegex.test(nick);
}

export const passwordCheckRgx = (password) => {
    const passwordCheckRegex = /^(?=.*[a-z])(?=.*[0-9])[0-9A-Za-z$&+,:;=?@#|'<>.^*()%!-]{8,16}$/;
    return passwordCheckRegex.test(password);
}

const SingUp = () => {
    const [idError, setIdError] = useState('');
    const [nickError, setNickError] = useState('');
    const [passwordRgxError, setPasswordRgxError] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [termError, setTermError] = useState('');
    // 커스텀 훅 적용
    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    // 커스텀 훅 적용

    const { isSigningUp, me, isSignedUp } = useSelector(state => state.user)

    useEffect(() => {
        if (me) {
            // 로그인 했으니 메인페이지로 이동
            alert('로그인했으니 메인페이지로 이동합니다');
            Router.push('/');
        }
    }, [me && me.id]);

    useEffect(() => {
        if (isSignedUp === true) {
            setTimeout(() => {
                alert('회원가입 되었으니 메인페이지로 이동합니다');
                Router.push('/');
            }, 500);
        }
    }, [isSignedUp]);

    const dispatch = useDispatch();
    // FORM은 REACT의 USESTATE를 쓰고 REDUX에서는 최종본을 모아서 넣음! 이렇게 하면 STATE를 둘 다 쓰는 셈이 된다.

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!idCheck(id)) {
            return setIdError(true);
        }
        if(!nickCheck(nick)){
            return setNickError(true);
        }
        if(!passwordCheckRgx(password)){
            return setPasswordRgxError(true);
        }
        setTermError(!term);
        dispatch({
            type : SIGN_UP_REQUEST,
            data : {
                userId : id,
                nickname : nick,
                password
            }
        });
    }, [id, nick, password, passwordCheck, term]);

    const onBlurId = () => {
        setIdError (!idCheck(id));
    }

    const onBlurNick = () => {
        setNickError (!nickCheck(nick));
    }

    const onBlurPassword = () => {
        setPasswordRgxError (!passwordCheckRgx(password));
    }

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
    }, []);

    useEffect(() => {
        term && setTermError(false);
    }, [term]);

    if (me) {
        return null;
    }

    if (isSignedUp) {
        return null;
    }

    return(
        <>
            <Form onSubmit = {onSubmit} style={{padding : 10}}>
                <div>
                    <label htmlFor="user-id">USER ID</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} onBlur={onBlurId}/>
                    {idError && <SignUpError> ID는 4글자 이상 12글자 이하 영문자, 숫자만 가능합니다 </SignUpError>}
                    {/* {idError ? <SignUpError> ID는 4글자 이상 12글자 이하 영문자, 숫자만 가능합니다 </SignUpError> : <SignUpConfirm>멋진 아이디네요!</SignUpConfirm>} */}
                </div>
                <div>
                    <label htmlFor="user-nick">USER Nickname</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} onBlur={onBlurNick}/>
                    {nickError && <SignUpError> 닉네임은 2글자 이상, 10글자 이하로 자유롭게 가능합니다 </SignUpError>}
                </div>
                <div>
                    <label htmlFor="user-password">USER Password</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange = {onChangePassword} onBlur={onBlurPassword}/>
                    {passwordRgxError && <SignUpError> 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요 </SignUpError>}
                </div>
                <div>
                    <label htmlFor="user-password-check">USER Password check</label>
                    <br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange = {onChangePasswordCheck}/>
                    {passwordError && <SignUpError> 비밀번호가 일치하지 않습니다 </SignUpError>}
                </div>
                <div style={{marginTop : 10}}>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>ok?</Checkbox>
                    {termError && <SignUpError>약관에 동의하셔야 합니다</SignUpError>}
                </div>
                <div style={{marginTop : 10}}>
                    <Button type="primary" htmlType="submit" loading = {isSigningUp}
                    >SIGN UP</Button>
                </div>
            </Form>
        </>
    );
};

export default SingUp;