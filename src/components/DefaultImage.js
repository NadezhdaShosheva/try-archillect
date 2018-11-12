import React from 'react';
import styled from 'styled-components';

const ImagePreview = styled.div`
  height: 400px;
  margin: 20px;
  text-align: center;

  img {
    max-width: 100%;
   max-height: 100%;
  }
`;

const DefaultImage = props => (
  <ImagePreview>
    <img src={props.defaultImage} alt="default" />
  </ImagePreview>
)

export default DefaultImage;