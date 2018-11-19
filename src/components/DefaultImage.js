import React from 'react';
import styled from 'styled-components';
import image from '../default.gif';

const ImagePreview = styled.div`
  height: 400px;
  margin: 20px;
  text-align: center;

  img {
    max-width: 100%;
   max-height: 100%;
  }
`;

const DefaultImage = () => (
  <ImagePreview>
    <img
      src={image}
      alt="default"
    />
  </ImagePreview>
);

export default DefaultImage;
