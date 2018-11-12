import React from 'react';
import styled from 'styled-components';

const ResultImage = styled.div`
  height: 400px;
  margin: 20px;
  text-align: center;

  img {
   max-width: 100%;
   max-height: 100%;
  }
`;

const Result = props => (
  <ResultImage>
    <img src={props.resultImage} alt="default" />
  </ResultImage>
)

export default Result;