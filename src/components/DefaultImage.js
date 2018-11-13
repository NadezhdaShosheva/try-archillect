import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImagePreview = styled.div`
  height: 400px;
  margin: 20px;
  text-align: center;

  img {
    max-width: 100%;
   max-height: 100%;
  }
`;

const DefaultImage = (props) => {
  const { defaultImage } = props;

  return (
    <ImagePreview>
      <img
        src={defaultImage}
        alt="default"
      />
    </ImagePreview>
  );
};

DefaultImage.propTypes = {
  defaultImage: PropTypes.string.isRequired,
};

export default DefaultImage;
