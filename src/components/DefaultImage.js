import React from 'react';
import styled from 'styled-components';

const ImagePreview = styled.div`
  margin: 20px;
  text-align: center;

  img {
    max-height: 400px;
  }
`;

const DefaultImage = props => (
  <ImagePreview>
    <img src={props.imageUrl} alt="default" />
  </ImagePreview>
)

export default DefaultImage;