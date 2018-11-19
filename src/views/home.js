import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import ImageForm from '../components/ImageForm';
import DefaultImage from '../components/DefaultImage';
import Result from '../components/Result';
import GetImage from '../services/getImage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Home extends Component {
  state = {
    value: '',
  };

  render() {
    const {
      hasResult,
      hasCounter,
      resultImage,
      onGetImageUrl,
      onDoesNotExistImage,
      onDeafultState,
    } = this.props;

    const { value } = this.state;

    const handleChange = (event) => {
      this.setState({ value: event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const resultResponse = await GetImage(value);
        const responseImage = resultResponse.hasOwnProperty('url');

        if (responseImage) {
          onGetImageUrl(resultResponse.url);
        } else if (resultResponse.error !== '') {
          const latestImage = parseInt(resultResponse.error.match(/(?:\D*(\d+)){3}/)[1], 10);
          const period = latestImage - value;
          onDoesNotExistImage(period);
        } else {
          onDeafultState();
        }
      } catch (error) {
        onDeafultState();
      }
    };

    return (
      <Wrapper>
        { hasResult
          ? (
            <Result
              resultImage={resultImage}
              hasCounter={hasCounter}
            />
          )
          : (
            <DefaultImage />
          )
        }
        <ImageForm
          value={value}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </Wrapper>
    );
  }
}

Home.propTypes = {
  resultImage: PropTypes.string.isRequired,
  hasCounter: PropTypes.bool.isRequired,
  hasResult: PropTypes.bool.isRequired,
  onGetImageUrl: PropTypes.func.isRequired,
  onDoesNotExistImage: PropTypes.func.isRequired,
  onDeafultState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  resultImage: state.resultImage,
  hasResult: state.hasResult,
  hasCounter: state.hasCounter,
});

const mapDispatchToProps = dispatch => ({
  onGetImageUrl: imageUrl => dispatch({ type: actionTypes.GET_IMAGE_URL, imageUrl }),
  onDoesNotExistImage: period => dispatch({ type: actionTypes.IMAGE_DOES_NOT_EXIST, period }),
  onDeafultState: () => dispatch({ type: actionTypes.DEFAULT_STATE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
