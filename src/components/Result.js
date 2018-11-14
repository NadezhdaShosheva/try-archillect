import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultImage = styled.div`
  height: 400px;
  margin: 20px;
  text-align: center;

  img {
   max-width: 100%;
   max-height: 100%;
  }
`;

const Result = (props) => {
  const { resultImage, hasCounter } = props;

  return (
    <ResultImage>
      { hasCounter
        ? (
          <p>Counter</p>
        )
        : (
          <img
            src={resultImage}
            alt="default"
          />
        )
      }
    </ResultImage>
  );
};

Result.propTypes = {
  resultImage: PropTypes.string.isRequired,
  hasCounter: PropTypes.bool.isRequired,
};

export default Result;
