import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import ImagesZoom from './ImagesZoom';
import { ThumImage3 } from './Style/ImagesStyle'

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 1) {
        return (
            <>
            <img src={`http://localhost:7070/${images[0].src}`} onClick={onZoom}/>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        );
    }
    if (images.length === 2) {
        return (
            <>
            <div>
                <img src={`http://localhost:7070/${images[0].src}`} width="50%" onClick={onZoom}/>
                <img src={`http://localhost:7070/${images[1].src}`} width="50%" onClick={onZoom}/>
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        )
    }
    return (
        <>
            <div>
                <img src={`http://localhost:7070/${images[0].src}`} width="50%" onClick={onZoom}/>
                <ThumImage3 onClick={onZoom}>
                    <Icon type="plus" />
                    <br />
                    {images.length - 1}
                    &nbsp;IMAGE SHOW MORE
                </ThumImage3>
            </div>
            {showImagesZoom && <ImagesZoom images = {images} onClose={onClose}/>}
        </>
    );
}

PostImages.propTypes = {
    images : PropTypes.arrayOf(PropTypes.shape({
      src : PropTypes.string,
    })).isRequired,
  };

export default PostImages;