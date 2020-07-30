import styled from 'styled-components';
import { Icon } from 'antd';

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  height: 55px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  
  & h1 {
    margin: 0;
    font-weight : 600;
    font-size: 22px;
    color: #ffa940;
    line-height: 55px;
  }
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: rgba(0, 0, 0, 0.7);
`;

export const CloseBtn = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 13px 15px;
  line-height: 20px;
  cursor: pointer;
  color : #40a9ff;
  font-size : 30px;
  transition: all ease 0.39s 0s;

  &:hover {
      color : #ff7a45;
      transition: all ease 0.39s 0s;
  }
`;

export const Indicator = styled.div`
  text-align: center;
  
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    background: #1890ff;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;
  
  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const ThumImage3 = styled.div`
    display : inline-block;
    width : 36%;
    margin : 0 7%;
    padding : 20px 0;
    text-align : center;
    vertical-align : middle;
    cursor: pointer;
    color : #ff7a45;
    font-size : 18px;
    font-weight : 600;
    transition: all ease 0.39s 0s;

    &:hover {
        color : #1890ff;
        transition: all ease 0.39s 0s;
    }
`
