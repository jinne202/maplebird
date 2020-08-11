import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGE_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import { PostFormStyle, TwitBtn, ThumbImg, ImageUploadBtn, ThumRemoveBtn } from './Style/ContainerStyle'
import { backUrl } from '../config/config';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
  const imageInput = useRef();

  useEffect(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded === true]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if(!text || !text.trim()){
      return alert('게시글을 작성하세요');
    }
    const formData = new FormData();
    imagePaths.forEach((i) => {
      formData.append('image', i);
    });
    formData.append('content', text);
    dispatch({
      type : ADD_POST_REQUEST,
      data : formData
    });
  }, [text, imagePaths]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  // ajax 사용해서 form data 전송
  const onChangeImage = useCallback((e) => {
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type : UPLOAD_IMAGE_REQUEST,
      data : imageFormData,
    })
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onRemoveImage = useCallback(index => () => {
    dispatch({
      type : REMOVE_IMAGE,
      index,
    })
  }, []);

  return (
      <PostFormStyle encType = "multipart/form-data" onSubmit = {onSubmitForm}>
          <Input.TextArea maxLength = {140} placeholder = "HOW WAS YOUR MAPLESTORY TODAY?" value = {text} onChange = {onChangeText}/>
          <div>
            <input type="file" multiple hidden ref={imageInput} onChange={onChangeImage} />
            <ImageUploadBtn onClick={onClickImageUpload}>IMAGE UPLOAD</ImageUploadBtn>
            <TwitBtn type = "primary" htmlType = "submit" loading = {isAddingPost}>TWIT!</TwitBtn>
          </div>
          <div>
            {imagePaths.map((v, i) => {
              return (
                <ThumbImg key = {v}>
                  <img src={v} alt = {v}/>
                  <div>
                    <ThumRemoveBtn onClick = {onRemoveImage(i)}>REMOVE</ThumRemoveBtn>
                  </div>
                </ThumbImg>
              )
            })}
          </div>
      </PostFormStyle>
  )
};

export default PostForm;