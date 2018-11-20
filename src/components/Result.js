import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Countdown from 'react-downcount';

const ResultImage = styled.div`
  height: 400px;
  margin: 20px;
  text-align: center;

  img {
   max-width: 100%;
   max-height: 100%;
  }
`;

const Counter = styled.div`
  color: #333;
  font-size: 16px;

  p {
    font-size: 13px;
  }
`;

const Result = (props) => {
  const { resultImage, hasCounter, timeLeft } = props;

  return (
    <ResultImage>
      { hasCounter
        ? (
          <Counter>
            <p>Time left for new picture</p>
            <Countdown
              endDate={timeLeft}
            />
          </Counter>
        )
        : (
          <img
            src={resultImage}
            alt="result"
          />
        )
      }
    </ResultImage>
  );
};

Result.propTypes = {
  resultImage: PropTypes.string.isRequired,
  hasCounter: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
};

export default Result;
