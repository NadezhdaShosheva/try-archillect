import React, { Component } from 'react';
import styled from 'styled-components';
import ImageForm from '../components/ImageForm';
import DefaultImage from '../components/DefaultImage';
import Result from '../components/Result';
import GetImage from '../services/getImage';
import image from '../default.gif';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Home extends Component {
  state = {
    defaultImage: image,
    resultImage: '',
    value: '',
    hasResult: false,
    hasCounter: false,
  };

  render() {
    const handleChange = (event) => {
      this.setState({ value: event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const { value } = this.state;
        const resultResponse = await GetImage(value);
        console.log(resultResponse);
        const responseImage = resultResponse.hasOwnProperty('url');
        if (responseImage) {
          this.setState({
            resultImage: resultResponse.url,
            hasResult: true,
            hasCounter: false,
          });
        } else if (resultResponse.error !== '') {
          const latestImage = parseInt(resultResponse.error.error.match(/(?:\D*(\d+)){3}/)[1], 10);
          console.log('latestImage', latestImage);
          this.setState({
            hasResult: true,
            hasCounter: true,
          });
        } else {
          this.setState({
            hasResult: false,
            hasCounter: false,
          });
        }
      } catch (error) {
        this.setState({
          hasResult: false,
          hasCounter: false,
        });
      }
    };

    const {
      hasResult,
      hasCounter,
      resultImage,
      defaultImage,
      value,
    } = this.state;

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
            <DefaultImage
              defaultImage={defaultImage}
            />
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

export default Home;
